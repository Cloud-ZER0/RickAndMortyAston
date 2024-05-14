import { useCallback } from "react";
import {
  selectFavorite,
  selectIsFavoriteLoading,
  selectUid,
} from "../../api/redux/selectors";
import { useAppDispatch, useAppSelector } from "../../api/redux/store";
import { claerFavorite } from "../../api/redux/thunks/favorite-thunk";

const useFavorite = () => {
  const data = useAppSelector(selectFavorite);
  const isLoading = useAppSelector(selectIsFavoriteLoading);
  const uid = useAppSelector(selectUid);
  const dispatch = useAppDispatch();

  const toggleClearFavorite = useCallback(() => {
    if (uid) {
      dispatch(claerFavorite(uid));
    }
  }, [uid, dispatch]);

  return { data, isLoading, toggleClearFavorite };
};

export default useFavorite;
