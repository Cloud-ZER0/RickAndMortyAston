import React from "react";
import { AuthContext, Store, isLogedIn } from "./authContext";

const ITEM_KEY = "isLogedIn";

interface AuthContextProviderProps {
  children: React.ReactNode;
}

// Remove this context later, will use redux instead,

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [authContext, setAuthContext] = React.useState<Store>(() => {
    const current = localStorage.getItem(ITEM_KEY);
    return {
      session: {
        //using as just for now, will remove this entire context later
        isLogedIn: (current as isLogedIn) ?? "unauthorized",
      },
    };
  });

  const value = React.useMemo(
    () => ({
      store: authContext,
      setStore: (auth: isLogedIn) => {
        localStorage.setItem(ITEM_KEY, auth);
        setAuthContext({
          session: {
            isLogedIn: auth,
          },
        });
      },
    }),
    [authContext]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
