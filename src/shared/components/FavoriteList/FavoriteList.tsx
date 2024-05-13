import { useGetSeveralCharectersByIdQuery } from "../../../api/redux/api/card-api";
import { Card } from "../Card/Card";
import styles from "./FavoriteList.module.scss";

interface FavoriteListProps {
  ids: string;
}

export const FavoriteList = ({ ids }: FavoriteListProps) => {
  const { data, isLoading, isError } = useGetSeveralCharectersByIdQuery(ids);
  return (
    <ul className={styles.list}>
      {!isLoading && data && data.map((el, i) => <Card {...el} key={i} />)}
    </ul>
  );
};
