import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import config from "../config";

interface AuthContextProps {
  children: React.ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  user: User | null;
}

type AuthAction =
  | { type: "LOGIN_SUCCESS"; user: User }
  | { type: "LOGIN_FAILED" }
  | { type: "LOGOUT" }
  | { type: "LOADING_COMPLETE" };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        isAdmin: action.user.role === "admin",
        user: action.user,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        isAuthenticated: false,
        isAdmin: false,
        user: null,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        isAdmin: false,
        user: null,
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
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    isAdmin: false,
    isLoading: true,
    user: null,
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${config.apiBaseUrl}/users/login`, {
        email,
        password,
      });

      if (response.data.success) {
        const user = response.data.user;
        dispatch({ type: "LOGIN_SUCCESS", user });
      } else {
        dispatch({ type: "LOGIN_FAILED" });
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED" });
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${config.apiBaseUrl}/users/logout`);
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Logout failed:", error);
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
          user: response.data.user,
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
        dispatch({ type: "LOGIN_SUCCESS", user: data.user });
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
