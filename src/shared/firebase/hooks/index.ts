import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthError,
} from "firebase/auth";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useAuthContext } from "../../../api/context/useAuthContext";
import { database } from "../firebase";

export const useSigneUp = (auth: Auth) => {
  const [error, setError] = useState<AuthError>();
  // const [createdUser, setCreatedUser] = useState<UserCredential>();
  const [loading, setLoading] = useState(false);
  const { setStore } = useAuthContext();
  const navigate = useNavigate();

  const registerUserWithEmailAndPassword = React.useCallback(
    async (name: string, email: string, password: string) => {
      setLoading(true);
      setError(undefined);
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (user) => {
          // setCreatedUser(user);
          await setDoc(doc(database, "users", user.user.uid), {
            name: name ?? "user",
            email: email,
            password: password,
            history: [],
            favorites: [],
          }).then((_) => {
            setStore("authorized");
          });
          navigate("/");
        })
        .catch((err) => setError(err as AuthError))
        .finally(() => setLoading(false));
    },
    [auth, navigate, setStore]
  );

  return { registerUserWithEmailAndPassword, loading, error };
};

export const useSigneIn = (auth: Auth) => {
  const [error, setError] = useState<AuthError>();
  // const [createdUser, setCreatedUser] = useState<UserCredential>();
  const [loading, setLoading] = useState(false);
  const { setStore } = useAuthContext();
  const navigate = useNavigate();

  const registerUserWithEmailAndPassword = React.useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(undefined);
      await signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          // setCreatedUser(user);
          setStore("authorized");
          navigate("/");
        })
        .catch((err) => setError(err as AuthError))
        .finally(() => setLoading(false));
    },
    [auth, navigate, setStore]
  );

  return { registerUserWithEmailAndPassword, loading, error };
};
