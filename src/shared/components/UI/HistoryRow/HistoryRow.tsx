import { Link } from "react-router-dom";
import useHistory from "../../../hooks/useHistory";
import styles from "./HistoryRow.module.scss";
import { IconClose } from "../../../icons/IconClose";

interface HistoryRowProps {
  query: string;
}

export const HistoryRow = ({ query }: HistoryRowProps) => {
  const { removeFromHistory } = useHistory();
  return (
    <div className={styles.rowWrapper}>
      <Link to={`/search?name=${query}`}>{"/search?name=" + query}</Link>
      <button
        onClick={() => removeFromHistory(query)}
        className={styles.removeBtn}
      >
        <IconClose />
      </button>
    </div>
  );
};
