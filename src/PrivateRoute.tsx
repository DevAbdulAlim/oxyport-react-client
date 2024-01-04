import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

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
  const { isAuthenticated, isAdmin } = useAuth();

  // useEffect(() => {
  //   (async () => {

  //   })()
  // },[])

  return isAuthenticated ? (
    isAdminRoute && !isAdmin ? (
      <Navigate to="/unauthorized" replace={true} /> // Redirect to unauthorized page for non-admins
    ) : (
      <>
        {children}
        <Outlet />
      </>
    )
  ) : (
    <Navigate to={redirectTo || "/login"} replace={true} /> // Redirect to login or default path
  );
};

export default PrivateRoute;
