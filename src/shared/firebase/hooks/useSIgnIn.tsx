import { useLocation, useNavigate } from "react-router-dom";

import React from "react";
import { Auth, AuthError, signInWithEmailAndPassword } from "firebase/auth";

export const useSigneIn = (auth: Auth) => {
  const [error, setError] = React.useState<AuthError>();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const registerUserWithEmailAndPassword = React.useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(undefined);
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate(state ?? "/");
        })
        .catch((err) => setError(err as AuthError))
        .finally(() => setLoading(false));
    },
    [auth, navigate, state]
  );

  return { registerUserWithEmailAndPassword, loading, error };
};
