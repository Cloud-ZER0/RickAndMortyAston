import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../api/redux/store";
import {
  removeFavorite,
  setFavorite,
} from "../../api/redux/thunks/favorite-thunk";
import {
  selectFavorite,
  selectIsFavoriteError,
  selectIsFavoriteLoading,
  selectUid,
} from "../../api/redux/selectors";

const useIsInFavorite = (cardId: number) => {
  const [is, setIs] = useState(false);
  const uid = useAppSelector(selectUid);
  const data = useAppSelector(selectFavorite);
  const isLoading = useAppSelector(selectIsFavoriteLoading);
  const isError = useAppSelector(selectIsFavoriteError);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data && data.find((el) => el === cardId.toString())) {
      setIs(true);
    }
  }, [data, setIs, cardId]);

  const onTogleFavorite = useCallback(() => {
    if (uid) {
      if (is) {
        setIs(false);
        dispatch(removeFavorite({ uid: uid, cardId: cardId }));
      } else {
        setIs(true);
        dispatch(setFavorite({ uid: uid, cardId: cardId }));
      }
    }
  }, [uid, setIs, dispatch, cardId, is]);

  return {
    isInfavorite: is,
    onTogleFavorite,
    isLoading: isLoading,
    isError: isError,
  };
};

export default useIsInFavorite;
