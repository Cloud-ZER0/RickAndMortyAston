import { useEffect, useState } from "react";
import {
  store,
  useAppDispatch,
  useAppSelector,
} from "../../../../api/redux/store";
import { setFavorite } from "../../../../api/redux/thunks/favorite-thunk";
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
