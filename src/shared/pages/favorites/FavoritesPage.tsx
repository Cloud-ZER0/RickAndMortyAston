import { FavoriteList } from "../../components/FavoriteList/FavoriteList";
import { Loading } from "../../components/Loading/Loading";
import { NothingYet } from "../../components/NothingYet/NothingYet";
import useFavorite from "../../hooks/useFavorite";
import paresIds from "../../utils/parseIds";

const FavoritesPage = () => {
  const { data, isLoading, toggleClearFavorite } = useFavorite();

  return (
    <section className={"section"}>
      <Loading isLoading={isLoading} />
      {data.length ? (
        <FavoriteList toggleClear={toggleClearFavorite} ids={paresIds(data)} />
      ) : (
        <NothingYet isLoading={isLoading} />
      )}
    </section>
  );
};

export default FavoritesPage;
