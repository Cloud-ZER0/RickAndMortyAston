import React from "react";
import { useFindCharactersByNameQuery } from "../../../api/redux/api/card-api";
import { Card } from "../../components/Card/Card";
import styles from "./SearchPage.module.scss";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { Search } from "../../components/UI/Search/Search";
import { Loading } from "../../components/Loading/Loading";

const useSearchParamsHook = (): string | null => {
  const [searchParams] = useSearchParams();
  return searchParams.get("name");
};

export const SearchPage = () => {
  const query = useSearchParamsHook();

  const { data, isLoading, isError } = useFindCharactersByNameQuery(
    query ?? "null"
  );

  return (
    <section className={clsx("section", styles.searchSection)}>
      <Search />
      {isError ? (
        <h1>{`Nothing found`}</h1>
      ) : (
        query && (
          <React.Fragment>
            <p className={styles.title}>{`Search by keyword: ${query}`}</p>
            <div className={styles.charList}>
              {data && data.map((char, i) => <Card key={i} {...char} />)}
            </div>{" "}
          </React.Fragment>
        )
      )}
      <Loading isLoading={isLoading} />
    </section>
  );
};
