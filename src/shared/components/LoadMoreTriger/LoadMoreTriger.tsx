import React from "react";
import { useInView } from "react-intersection-observer";

export interface ILoadMoreProps {
  setCurrentPage: () => void;
  hasNextPage: String | null | undefined;
  isFetching: boolean;
}

export const LoadMoreTrgigger = ({
  setCurrentPage,
  hasNextPage,
  isFetching,
}: ILoadMoreProps) => {
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      setCurrentPage();
    }
  }, [inView, setCurrentPage, hasNextPage, isFetching]);

  return <div ref={ref}>{hasNextPage && <h1>Loading...</h1>}</div>;
};
