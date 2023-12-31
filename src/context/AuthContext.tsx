import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  children: React.ReactNode;
}

interface AuthContextValue {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = () => {
    // Your authentication logic here
    setIsAuthenticated(true);
    setIsAdmin(true);
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
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
