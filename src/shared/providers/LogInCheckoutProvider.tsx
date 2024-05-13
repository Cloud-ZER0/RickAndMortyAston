import React from "react";
import { useAuthContext } from "../../api/context/useAuthContext";
import { Navigate } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";

export const LogInCheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { session } = useAuthContext();

  if (session.loading) {
    return <Loading isLoading />;
  }

  return <>{session.isLogedIn ? children : <Navigate to={"/signin"} />}</>;
};
