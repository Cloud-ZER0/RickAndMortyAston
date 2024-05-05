import React from "react";
import { AuthContext, AuthContextProps, Store } from "./authContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../shared/firebase/firebase";

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

  const inititalizer = (user: any) => {
    if (user) {
      setAuthContext({
        session: {
          isLogedIn: true,
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

  console.log(value.store.session.loading);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
