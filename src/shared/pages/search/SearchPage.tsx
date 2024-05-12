import React from "react";
import { useFindCharactersByNameQuery } from "../../../api/redux/api/card-api";
import { Card } from "../../components/Card/Card";
import { LoadMoreTrgigger } from "../../components/LoadMoreTriger/LoadMoreTriger";
import styles from "./SearchPage.module.scss";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

const useSearchParamsHook = (): string | null => {
  const [searchParams] = useSearchParams();
  return searchParams.get("name");
};

export const SearchPage = () => {
  const query = useSearchParamsHook();

  const { data, isLoading, isError } = useFindCharactersByNameQuery(
    query ?? ""
  );

  if (!query) {
    return (
      <section className="section">Type something to find charecter!</section>
    );
  }

  return (
    <section className={clsx("section", styles.searchSection)}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>{`Nothing found by keyword: ${query}`}</h1>
      ) : (
        <>
          <h1>{`Search by keyword: ${query}`}</h1>
          <div className={styles.charList}>
            {data && data.map((char, i) => <Card key={i} {...char} />)}
          </div>
        </>
      )}
      {/* <LoadMoreTrgigger
        setCurrentPage={handlePageChange}
        hasNextPage={data?.hasNextPage}
        isFetching={isFetching}
      /> */}
    </section>
  );
};
