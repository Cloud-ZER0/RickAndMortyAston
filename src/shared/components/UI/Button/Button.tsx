import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

export interface BtnProps {
  children: React.ReactNode;
  className?: string;
  onAction?: () => void;
  type?: "submit" | "reset" | "button";
  variant?: "Primary" | "Logout" | "Clear";
  fill?: boolean;
}

export const Button = ({
  children,
  className,
  type = "button",
  onAction,
  variant = "Primary",
  fill,
}: BtnProps) => {
  return (
    <button
      onClick={onAction}
      type={type}
      className={clsx(
        styles.btn,
        className,
        styles[variant],
        fill ? styles.fill : null
      )}
    >
      {children}
    </button>
  );
};
