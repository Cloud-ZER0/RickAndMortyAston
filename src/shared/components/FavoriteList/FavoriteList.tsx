import { useGetSeveralCharectersByIdQuery } from "../../../api/redux/api/card-api";
import { Card } from "../Card/Card";
import styles from "./FavoriteList.module.scss";
import { ClearButton } from "../ClaerButton/ClearButton";
import { Navigate } from "react-router-dom";
import { Loading } from "../Loading/Loading";

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
      <ClearButton
        onClearAction={toggleClear}
        isVisible={isVisible as boolean}
        placeHolder="Clear Favorite"
      />
    </>
  );
};
