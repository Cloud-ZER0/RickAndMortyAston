import { FavrIcon } from "../../../icons/FavrIcon";
import styles from "./FavButton.module.scss";
import clsx from "clsx";

interface FavBtnProps {
  onTogleFavorite: () => void;
  isInFavorite: boolean;
  disabled?: boolean;
}

export const FavButton = ({
  isInFavorite,
  onTogleFavorite,
  disabled,
}: FavBtnProps) => {
  return (
    <button
      onClick={onTogleFavorite}
      disabled={disabled}
      className={clsx(
        styles.btn,
        isInFavorite ? styles.inFavr : "",
        disabled ? styles.disabled : ""
      )}
    >
      <FavrIcon />
    </button>
  );
};
