import styles from "./FavoritePage.module.scss";
import { FavoriteList } from "../../components/FavoriteList/FavoriteList";
import { Loading } from "../../components/Loading/Loading";
import { NothingYet } from "../../components/NothingYet/NothingYet";
import useFavorite from "../../hooks/useFavorite";
import paresIds from "../../utils/parseIds";

export const FavoritesPage = () => {
  const { data, isLoading, toggleClearFavorite } = useFavorite();

  return (
    <section className={"section"}>
      <Loading isLoading={isLoading} />
      {data.length ? <FavoriteList ids={paresIds(data)} /> : <NothingYet />}
      {data.length ? (
        <button className={styles.clearBtn} onClick={toggleClearFavorite}>
          Clear favorite
        </button>
      ) : null}
    </section>
  );
};
