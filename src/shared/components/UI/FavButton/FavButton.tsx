import { FavrIcon } from "../../../icons/FavrIcon";
import styles from "./FavButton.module.scss";

export const FavButton = () => {
  return (
    <button className={styles.btn}>
      <FavrIcon />
    </button>
  );
};
