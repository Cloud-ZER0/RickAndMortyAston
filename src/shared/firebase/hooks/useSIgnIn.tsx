import { useNavigate } from "react-router-dom";

import React from "react";
import { Auth, AuthError, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../api/redux/slices/user";
import { database } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export const useSigneIn = (auth: Auth) => {
  const [error, setError] = React.useState<AuthError>();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUserWithEmailAndPassword = React.useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(undefined);
      await signInWithEmailAndPassword(auth, email, password)
        // .then(async (user) => {
        //   const docRef = doc(database, "users", user.user.uid);
        //   const snapShot = await getDoc(docRef);
        //   const userData = snapShot.data();
        //   console.log(userData);
        //   dispatch(
        //     setUser({
        //       name: userData?.name ?? "user",
        //       token: user.user.uid,
        //       email: userData?.email,
        //       history: {
        //         data: userData?.history,
        //         isLoading: false,
        //         isError: false,
        //       },
        //     })
        //   );
        //   navigate("/");
        // })
        .then(() => {
          navigate("/");
        })
        .catch((err) => setError(err as AuthError))
        .finally(() => setLoading(false));
    },
    [auth, navigate, dispatch]
  );

  return { registerUserWithEmailAndPassword, loading, error };
};
