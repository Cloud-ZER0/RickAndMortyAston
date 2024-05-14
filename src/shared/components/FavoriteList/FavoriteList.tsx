import { useGetSeveralCharectersByIdQuery } from "../../../api/redux/api/card-api";
import { Card } from "../Card/Card";
import styles from "./FavoriteList.module.scss";
import { ClearButton } from "../ClaerButton/ClearButton";

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
      <ClearButton
        onClearAction={toggleClear}
        isVisible={isVisible as boolean}
        placeHolder="Clear Favorite"
      />
    </>
  );
};
