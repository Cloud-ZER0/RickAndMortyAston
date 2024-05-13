import { useAppDispatch, useAppSelector } from "../../api/redux/store";
import { claerFavorite } from "../../api/redux/thunks/favorite-thunk";

const useFavorite = () => {
  const { data, isLoading } = useAppSelector((store) => store.favorite);
  const uid = useAppSelector((store) => store.user.token);
  const dispatch = useAppDispatch();

  const toggleClearFavorite = () => {
    if (uid) {
      dispatch(claerFavorite(uid));
    }
  };

  return { data, isLoading, toggleClearFavorite };
};

export default useFavorite;
