import { Card, CharecterCard } from "../Card/Card";
import styles from "./MainPageList.module.scss";

interface MainPageListProps {
  data: CharecterCard[];
}

export const MainPageList = ({ data }: MainPageListProps) => {
  return (
    <div className={styles.charList}>
      {data.length && data.map((char, i) => <Card key={i} {...char} />)}
    </div>
  );
};
