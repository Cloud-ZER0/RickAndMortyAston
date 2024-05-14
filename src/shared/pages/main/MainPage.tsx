import styles from "./MainPage.module.scss";
import { useGetAllCharectersQuery } from "../../../api/redux/api/card-api";
import React from "react";
import { LoadMoreTrgigger } from "../../components/LoadMoreTriger/LoadMoreTriger";
import { Loading } from "../../components/Loading/Loading";
import { MainPageList } from "../../components/MainPageList/MainPageList";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Navigate } from "react-router-dom";

const MainPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data, isLoading, isError, isFetching } =
    useGetAllCharectersQuery(currentPage);

  const handlePageChange = () => {
    setCurrentPage((current) => current + 1);
  };

  if (isError) {
    return <Navigate to={"/error"} />;
  }

  return (
    <ErrorBoundary>
      <section className="section">
        <h1 className={styles.title}>The Rick and Morty</h1>
        {data ? <MainPageList data={data.cards} /> : null}
        <LoadMoreTrgigger
          setCurrentPage={handlePageChange}
          hasNextPage={data?.hasNextPage}
          isFetching={isFetching}
        />
        <Loading isLoading={isLoading} />
      </section>
    </ErrorBoundary>
  );
};

export default MainPage;
