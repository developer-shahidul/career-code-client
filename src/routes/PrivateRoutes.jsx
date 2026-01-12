import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  // console.log(location.pathname);
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <span className="loading loading-ring loading-xl "></span>;
  }
  if (!user) {
    return <Navigate to="/signIn" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
