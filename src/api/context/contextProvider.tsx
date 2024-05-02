import React from "react";
import { AuthContext, AuthContextProps, Store } from "./authContext";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../shared/firebase/firebase";

interface AuthContextProviderProps {
  children: React.ReactNode;
}

// Remove this context later, will use redux instead,

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [authContext, setAuthContext] = React.useState<Store>({
    session: {
      isLogedIn: false,
    },
  });

  const inititalizer = (user: any) => {
    if (user) {
      setAuthContext({
        session: {
          isLogedIn: true,
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
