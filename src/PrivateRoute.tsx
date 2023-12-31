import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  isAdminRoute?: boolean;
  redirectTo?: string;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, isAdminRoute, redirectTo, children }) => {
  const isAdmin = /* your logic to determine admin status */ true; // Update this with your admin-checking logic

  return isAuthenticated ? (
    isAdminRoute && !isAdmin ? (
      <Navigate to="/unauthorized" replace={true} /> // Redirect to unauthorized page for non-admins
    ) : (
      <Outlet /> // Renders nested routes within the authenticated area
    )
  ) : (
    <Navigate to={redirectTo || '/login'} replace={true} /> // Redirect to login or default path
  );
};

export default PrivateRoute;
