import React from "react";

export type isLogedIn = "authorized" | "unauthorized";

export interface Store {
  session: {
    isLogedIn: isLogedIn;
  };
}

export interface AuthContextProps {
  store: Store;
  // setStore: React.Dispatch<React.SetStateAction<Store>>;
  setStore: (auth: isLogedIn) => void;
}

export const AuthContext = React.createContext<AuthContextProps>({
  store: {
    session: {
      isLogedIn: "unauthorized",
    },
  },
  setStore: () => {},
});
