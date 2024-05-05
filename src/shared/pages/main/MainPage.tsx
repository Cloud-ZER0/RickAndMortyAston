import { Card } from "../../components/Card/Card";
import styles from "./MainPage.module.scss";
import { useGetAllCharectersQuery } from "../../../api/redux/api/card-api";
import React from "react";
import { LoadMoreTrgigger } from "../../components/LoadMoreTriger/LoadMoreTriger";

export const MainPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data, isLoading, isError, isFetching } =
    useGetAllCharectersQuery(currentPage);

  console.log(isFetching);
  const handlePageChange = () => {
    setCurrentPage((current) => current + 1);
  };

  return (
    <section className="section">
      <h1 className={styles.title}>The Rick and Morty</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.charList}>
          {data?.cards &&
            data.cards.map((char, i) => <Card key={i} {...char} />)}
        </div>
      )}
      <LoadMoreTrgigger
        setCurrentPage={handlePageChange}
        hasNextPage={data?.hasNextPage}
        isFetching={isFetching}
      />
      {isError && <h1>Oops somegthing goes wrong</h1>}
    </section>
  );
};
