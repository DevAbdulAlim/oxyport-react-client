import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import config from "../config";

interface AuthContextProps {
  children: React.ReactNode;
}

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
}

type AuthAction =
  | { type: "AUTHENTICATED" }
  | { type: "ADMIN" }
  | { type: "LOGOUT" }
  | { type: "LOADING_COMPLETE" };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: true,
      };

    case "ADMIN":
      return {
        ...state,
        isAdmin: true,
        isAuthenticated: true,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        isAdmin: false,
      };

    case "LOADING_COMPLETE":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

const AuthContext = createContext<
  | {
      state: AuthState;
      dispatch: React.Dispatch<AuthAction>;
      login: (email: string, password: string) => Promise<void>;
      logout: () => void;
    }
  | undefined
>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    isAdmin: false,
    isLoading: true,
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${config.apiBaseUrl}/users/login`, {
        email,
        password,
      });

      if (response.data.success) {
        console.log("Login successful:", response.data);

        const userRole = response.data.user.role;

        if (userRole === "admin") {
          dispatch({ type: "ADMIN" });
        } else {
          console.log("User is not an admin.");
        }

        dispatch({ type: "AUTHENTICATED" });
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      // Send logout request to the server
      await axios.post(`${config.apiBaseUrl}/users/logout`);

      // Dispatch the logout action
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle logout failure if needed
    }
  };

  const verifyToken = async () => {
    try {
      const response = await axios.post(
        `${config.apiBaseUrl}/users/verify-token`,
        {}
      );
      if (response.data.success) {
        return {
          authenticated: true,
          admin: response.data.user.role === "admin" ? true : false,
        };
      } else {
        console.error("Token verification failed:", response.data.message);
      }
    } catch (error) {
      console.error("Token verification failed:", error);
    }
  };

  useEffect(() => {
    (async () => {
      const data = await verifyToken();
      if (data && data.authenticated) {
        const { admin } = data;
        dispatch({ type: "AUTHENTICATED" });
        if (admin) {
          dispatch({ type: "ADMIN" });
          console.log("admin");
        }
      }
      dispatch({ type: "LOADING_COMPLETE" });
    })();
  }, []);

  const contextValue = { state, dispatch, login, logout };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
