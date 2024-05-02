import React from "react";

export interface Store {
  session: {
    isLogedIn: boolean;
  };
}

export interface AuthContextProps {
  store: Store;
  setStore: (logedIn: boolean) => void;
}

export const AuthContext = React.createContext<AuthContextProps>({
  store: {
    session: {
      isLogedIn: false,
    },
  },
  setStore: () => {},
});
