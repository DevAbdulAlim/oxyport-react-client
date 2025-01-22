import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/ui/Loader";

interface PrivateRouteProps {
  isAdminRoute?: boolean;
  redirectTo?: string;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAdminRoute,
  redirectTo,
  children,
}) => {
  const { state } = useAuth();

  const location = useLocation();

  if (state.isLoading) {
    // Render loading state or placeholder
    return <Loader />;
  }

  return state.isAuthenticated ? (
    isAdminRoute && !state.isAdmin ? (
      <Navigate to="/unauthorized" replace={true} /> // Redirect to unauthorized page for non-admins
    ) : (
      <>{children}</>
    )
  ) : (
    <Navigate
      to={redirectTo || "/login"}
      state={{ from: location.pathname }}
      replace={true}
    /> // Redirect to login or default path
  );
};

export default PrivateRoute;
