import React from "react";
import { useAuthContext } from "../../api/context/useAuthContext";
import { Navigate } from "react-router-dom";

export const LogInCheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { session } = useAuthContext();

  return <>{session.isLogedIn ? children : <Navigate to={"/signin"} />}</>;
};
