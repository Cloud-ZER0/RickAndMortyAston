import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface IBtnProps {
  children: React.ReactNode;
  className?: string;
  onAction?: () => void;
  type?: "submit" | "reset" | "button";
}

export const Button = ({ children, className, type, onAction }: IBtnProps) => {
  return (
    <button
      onClick={onAction}
      type={type}
      className={clsx(styles.btn, className)}
    >
      {children}
    </button>
  );
};
