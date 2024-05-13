import useHistory from "../../hooks/useHistory";

import { Loading } from "../../components/Loading/Loading";
import { HistoryList } from "../../components/HistoryList/HistoryList";
import { NothingYet } from "../../components/NothingYet/NothingYet";

const HistoryPage = () => {
  const { data, isLoading, clearUserHistory } = useHistory();

  return (
    <section className={"section"}>
      <Loading isLoading={isLoading} />
      {data.length ? (
        <HistoryList data={data} toggleClear={clearUserHistory} />
      ) : (
        <NothingYet />
      )}
    </section>
  );
};

export default HistoryPage;
