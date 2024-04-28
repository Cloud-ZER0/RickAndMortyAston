import React from "react";
import { AuthContext } from "./authContext";

export const useAuthContext = () => {
  const { store, setStore } = React.useContext(AuthContext);
  return { session: store.session, setStore };
};
