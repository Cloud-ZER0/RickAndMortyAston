import { FavrIcon } from "../../../icons/FavrIcon";
import styles from "./FavButton.module.scss";
import clsx from "clsx";

interface FavBtnProps {
  onTogleFavorite: () => void;
  isInFavorite: boolean;
}

export const FavButton = ({ isInFavorite, onTogleFavorite }: FavBtnProps) => {
  return (
    <button
      onClick={onTogleFavorite}
      className={clsx(styles.btn, isInFavorite ? styles.inFavr : "")}
    >
      <FavrIcon />
    </button>
  );
};
