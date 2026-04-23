import React from "react";
import { useAuth } from "../context/UserContext";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = Cookies.get("authToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
