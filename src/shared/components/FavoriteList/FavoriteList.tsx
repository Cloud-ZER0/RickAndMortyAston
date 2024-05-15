import { useGetSeveralCharectersByIdQuery } from "../../../api/redux/api/card-api";
import { Card } from "../Card/Card";
import styles from "./FavoriteList.module.scss";
import { Navigate } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { Button } from "../UI/Button/Button";

interface FavoriteListProps {
  ids: string;
  toggleClear: () => void;
}

export const FavoriteList = ({ ids, toggleClear }: FavoriteListProps) => {
  const { data, isLoading, isError } = useGetSeveralCharectersByIdQuery(ids);
  const isVisible = !isLoading && data;

  if (isError) {
    return <Navigate to={"/error"} />;
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <ul className={styles.list}>
        {isVisible && data.map((el, i) => <Card {...el} key={i} />)}
      </ul>
      <Button onAction={toggleClear} variant="Clear" className={styles.btn}>
        Clear favorite
      </Button>
    </>
  );
};
