import styles from "./HistoryList.module.scss";
import { HistoryRow } from "../UI/HistoryRow/HistoryRow";
import { Button } from "../UI/Button/Button";

interface HistoryListProps {
  data: string[];
  toggleClear: () => void;
}

export const HistoryList = ({ data, toggleClear }: HistoryListProps) => {
  return (
    <div className={styles.listWrapper}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Your search results
      </h1>
      <ul className={styles.historyList}>
        {data.map((query, i) => (
          <HistoryRow query={query} key={i} />
        ))}
      </ul>

      <Button onAction={toggleClear} variant="Clear" className={styles.btn}>
        Clear History
      </Button>
    </div>
  );
};
