import { useNavigate } from "react-router-dom";
import React from "react";
import { Auth, createUserWithEmailAndPassword, AuthError } from "firebase/auth";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebase";

export const useSigneUp = (auth: Auth) => {
  const [error, setError] = useState<AuthError>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerUserWithEmailAndPassword = React.useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(undefined);
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (user) => {
          await setDoc(doc(database, "users", user.user.uid), {
            name: "user",
            email: email,
            password: password,
            history: [],
            favorites: [],
          });
          navigate(-1);
        })
        .catch((err) => setError(err as AuthError))
        .finally(() => setLoading(false));
    },
    [auth, navigate]
  );

  return { registerUserWithEmailAndPassword, loading, error };
};
