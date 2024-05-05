import React from "react";
import { useAuthContext } from "../../api/context/useAuthContext";
import { Navigate } from "react-router-dom";

export const LogInCheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { session } = useAuthContext();

  if (session.loading) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Initialazing...
      </h1>
    );
  }

  return <>{session.isLogedIn ? children : <Navigate to={"/signin"} />}</>;
};
