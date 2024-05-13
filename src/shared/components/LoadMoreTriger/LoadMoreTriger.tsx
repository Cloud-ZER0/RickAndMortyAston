import React from "react";
import { useInView } from "react-intersection-observer";
import { ClipLoader } from "react-spinners";

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

  return (
    <div
      style={{
        width: "100%",
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
      }}
      ref={ref}
    >
      {hasNextPage ? <ClipLoader color="#36d7b7" /> : null}
    </div>
  );
};
