import useHistory from "../../hooks/useHistory";

import { Loading } from "../../components/Loading/Loading";
import { HistoryList } from "../../components/HistoryList/HistoryList";
import { NothingYet } from "../../components/NothingYet/NothingYet";
import { Navigate } from "react-router-dom";

const HistoryPage = () => {
  const { data, isLoading, clearUserHistory, isError } = useHistory();

  if (isError) {
    return <Navigate to={"/error"} />;
  }

  return (
    <section className={"section"}>
      <Loading isLoading={isLoading} />
      {data.length ? (
        <HistoryList data={data} toggleClear={clearUserHistory} />
      ) : (
        <NothingYet isLoading={isLoading} />
      )}
    </section>
  );
};

export default HistoryPage;
