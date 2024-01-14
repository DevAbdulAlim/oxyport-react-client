import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import config from "../config";

interface AuthContextProps {
  children: React.ReactNode;
}

interface AuthContextValue {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  verifyToken: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAuthenticated(true);
    setIsAdmin(true);
  }, []);

  console.log(isAuthenticated);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${config.apiBaseUrl}/users/login`, {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      setIsAuthenticated(true);
      setIsAdmin(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const verifyToken = async () => {
    try {
      const response = await axios.post(
        `${config.apiBaseUrl}/users/verify-token`,
        {},
        {
          withCredentials: true,
        }
      );

      if (response.data.user) {
        const { role } = response.data.user;

        if (role === "admin") {
          setIsAdmin(true);
        }

        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error while verifying token:", error);
      // Handle specific errors or add additional logic if needed
    }
  };

  const logout = () => {
    // Your logout logic here
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  const contextValue: AuthContextValue = {
    isAuthenticated,
    isAdmin,
    login,
    verifyToken,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
