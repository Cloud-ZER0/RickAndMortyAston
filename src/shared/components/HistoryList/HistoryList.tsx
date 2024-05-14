import styles from "./HistoryList.module.scss";
import { HistoryRow } from "../UI/HistoryRow/HistoryRow";
import { ClearButton } from "../ClaerButton/ClearButton";

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
      <ClearButton
        onClearAction={toggleClear}
        isVisible
        placeHolder="Clear History"
      />
    </div>
  );
};
