import { useNavigate } from "react-router-dom";
import React from "react";
import { Auth, createUserWithEmailAndPassword, AuthError } from "firebase/auth";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../../api/redux/slices/user";

// TODO TRY yield

export const useSigneUp = (auth: Auth) => {
  const [error, setError] = useState<AuthError>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUserWithEmailAndPassword = React.useCallback(
    async (name: string, email: string, password: string) => {
      setLoading(true);
      setError(undefined);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          dispatch(
            setUser({
              name: name,
              token: user.user.uid,
              email: user.user.email,
            })
          );
          return user;
        })
        .then(async (user) => {
          await setDoc(doc(database, "users", user.user.uid), {
            name: name ?? "user",
            email: email,
            password: password,
            history: [],
            favorites: [],
          });
          navigate("/");
        })
        .catch((err) => setError(err as AuthError))
        .finally(() => setLoading(false));
    },
    [auth, navigate, dispatch]
  );

  return { registerUserWithEmailAndPassword, loading, error };
};
