import { Card } from "../../components/Card/Card";
import useFetchCharecters from "../../hooks/useFetchCharacter";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const { charecters, loading, error, nextPage, fetchMore } =
    useFetchCharecters();
  // will handle later
  if (error) {
    console.log(error);
  }

  const handleFetchMore = async () => {
    await fetchMore();
  };

  return (
    <section className="section">
      <h1 className={styles.title}>The Rick and Morty</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.charList}>
          {charecters &&
            charecters.map((char, i) => <Card key={i} {...char} />)}
        </div>
      )}
      {nextPage && (
        <div className={styles.moreBtn}>
          <button onClick={handleFetchMore}>Load more</button>
        </div>
      )}
    </section>
  );
};
