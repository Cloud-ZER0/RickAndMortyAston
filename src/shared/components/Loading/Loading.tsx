import React from "react";
import styles from "./Loading.module.scss";
import clsx from "clsx";
interface LoadingProps {
  isLoading: boolean;
}

export const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <div className={clsx(styles.loader, isLoading ? styles.visible : "")}>
      <h1>Loading</h1>
    </div>
  );
};
