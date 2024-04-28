import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface IBtnProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export const Button = ({
  children,
  className,
  type,
  onClick = () => {},
}: IBtnProps) => {
  return (
    <button
      onClick={() => onClick()}
      type={type}
      className={clsx(styles.btn, className)}
    >
      {children}
    </button>
  );
};
