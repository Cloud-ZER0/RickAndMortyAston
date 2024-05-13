import clsx from "clsx";

import styles from "./NothingYet.module.scss";

export const NothingYet = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className={clsx(styles.wrapper, !isLoading ? styles.visible : "")}>
      <h2>There is nothing yet</h2>
    </div>
  );
};
