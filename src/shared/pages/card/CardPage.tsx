import { useParams } from "react-router-dom";
import styles from "./CardPage.module.scss";
import { useGetSingleCharacterQuery } from "../../../api/redux/api/card-api";
import clsx from "clsx";
import { Card } from "../../components/Card/Card";

const Episode = ({ epNumber }: { epNumber: string }) => {
  return (
    <div className={styles.episodeWrapper}>
      <p>{`Episode #${epNumber}`}</p>
    </div>
  );
};

const CardPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleCharacterQuery(id ?? "1");

  if (!data || isError) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <section className={clsx("section", styles.charecterPage)}>
          <Card {...data} />
          <div className={styles.card}>
            <h2>Episodes list</h2>
            <div className={styles.episodesList}>
              {data.episodes &&
                data.episodes.map((ep, i) => <Episode epNumber={ep} key={i} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CardPage;
