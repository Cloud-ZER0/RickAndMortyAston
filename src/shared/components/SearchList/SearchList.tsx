import { useFindCharactersByNameQuery } from "../../../api/redux/api/card-api";
import { Card } from "../Card/Card";
import { Loading } from "../Loading/Loading";
import styles from "./SearchList.module.scss";

interface SearchListProps {
  keyword: string;
}

export const SearchList = ({ keyword }: SearchListProps) => {
  const { data, isError, isFetching } = useFindCharactersByNameQuery(keyword);

  return (
    <>
      <p className={styles.title}>{`Search by keyword: ${keyword}`}</p>

      {isError ? (
        <h4>Nothing found</h4>
      ) : (
        <div className={styles.charList}>
          {data && data.map((char, i) => <Card key={i} {...char} />)}
        </div>
      )}
      <Loading isLoading={isFetching} />
    </>
  );
};
