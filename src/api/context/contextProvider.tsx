import React from "react";
import { AuthContext, AuthContextProps, Store } from "./authContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../shared/firebase/firebase";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../redux/slices/user";

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [authContext, setAuthContext] = React.useState<Store>({
    session: {
      isLogedIn: false,
      loading: true,
    },
  });

  const dispatch = useDispatch();

  const inititalizer = (user: any) => {
    if (user) {
      console.log(user);
      dispatch(
        setUser({
          email: user.email,
          name: "test",
          token: user.uid,
        })
      );

      setAuthContext({
        session: {
          isLogedIn: true,
          loading: false,
        },
      });
    } else {
      dispatch(removeUser());
      setAuthContext({
        session: {
          isLogedIn: false,
          loading: false,
        },
      });
    }
  };

  React.useEffect(() => {
    const subscribe = onAuthStateChanged(auth, inititalizer);
    return subscribe;
  }, []);

  const setAuthLogedIn = (isLogedIn: boolean) => {
    setAuthContext({
      session: {
        isLogedIn: isLogedIn,
        loading: false,
      },
    });
  };

  const value = React.useMemo<AuthContextProps>(
    () => ({
      store: authContext,
      setStore: setAuthLogedIn,
    }),
    [authContext]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
