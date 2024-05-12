import clsx from "clsx";
import useHistory from "../../hooks/useHistory";
import styles from "./HistoryPage.module.scss";
import { HistoryRow } from "../../components/UI/HistoryRow/HistoryRow";
import { Loading } from "../../components/Loading/Loading";

export const HistoryPage = () => {
  const { data, isLoading, isError, clearUserHistory } = useHistory();

  // if (isLoading) {
  //   return <h1 style={{ marginTop: "400px", textAlign: "center" }}>Loading</h1>;
  // }
  if (isError) {
    return (
      <h1 style={{ marginTop: "400px", textAlign: "center" }}>
        Oops...something goes wrong
      </h1>
    );
  }

  return (
    <section className={clsx("section", styles.historySection)}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        {data?.length ? "Your seach results" : "There is nothing yet"}
      </h1>
      {data?.length ? (
        <div className={styles.listWrapper}>
          <ul className={styles.historyList}>
            {data.map((query, i) => (
              <HistoryRow query={query} key={i} />
            ))}
          </ul>
          <button onClick={clearUserHistory} className={styles.clearBtn}>
            Clear history
          </button>
          <Loading isLoading={isLoading} />
        </div>
      ) : null}
    </section>
  );
};
