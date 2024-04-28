import React from "react";
import { Header } from "../components/Header/Header";

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
