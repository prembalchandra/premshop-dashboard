import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = ({ onLogout }) => {
  useEffect(() => {
    onLogout(); // reset login state
  }, [onLogout]);

  return <Navigate to="/login" />;
};

export default Logout;
