import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    console.log("protected "+loading+""+user)
    if (loading) return null;
    if (!user) return <Navigate to="/" replace />;
    return children;
  };
export default ProtectedRoute;
