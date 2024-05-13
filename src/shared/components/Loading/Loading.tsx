import React from "react";
import styles from "./Loading.module.scss";
import clsx from "clsx";
import { ClipLoader } from "react-spinners";
interface LoadingProps {
  isLoading: boolean;
}

export const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <div className={clsx(styles.loader, isLoading ? styles.visible : "")}>
      <div className={styles.center}>
        <ClipLoader color="#36d7b7" />
      </div>
    </div>
  );
};
