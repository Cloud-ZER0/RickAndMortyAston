import clsx from "clsx";
import { useGetSeveralCharectersByIdQuery } from "../../../api/redux/api/card-api";
import { Card } from "../Card/Card";
import styles from "./FavoriteList.module.scss";

interface FavoriteListProps {
  ids: string;
  toggleClear: () => void;
}

export const FavoriteList = ({ ids, toggleClear }: FavoriteListProps) => {
  const { data, isLoading, isError } = useGetSeveralCharectersByIdQuery(ids);
  const isVisible = !isLoading && data;
  return (
    <>
      <ul className={styles.list}>
        {isVisible && data.map((el, i) => <Card {...el} key={i} />)}
      </ul>
      <button
        className={clsx(styles.clearBtn, isVisible ? styles.visible : "")}
        onClick={toggleClear}
      >
        Clear favorite
      </button>
    </>
  );
};
