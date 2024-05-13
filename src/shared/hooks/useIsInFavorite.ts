import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../api/redux/store";
import {
  removeFavorite,
  setFavorite,
} from "../../api/redux/thunks/favorite-thunk";

const useIsInFavorite = (cardId: string) => {
  const [is, setIs] = useState(false);
  const uid = useAppSelector((store) => store.user.token);
  const favr = useAppSelector((store) => store.favorite);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (favr.data && favr.data.find((el) => el === cardId)) {
      setIs(true);
    }
  }, [favr, setIs, cardId]);

  const onTogleFavorite = () => {
    if (uid) {
      if (is) {
        setIs(false);
        dispatch(removeFavorite({ uid: uid, cardId: cardId }));
      } else {
        setIs(true);
        dispatch(setFavorite({ uid: uid, cardId: cardId }));
      }
    }
  };

  return { isInfavorite: is, onTogleFavorite, isLoading: favr.isLoading, isError: favr.isError };
};

export default useIsInFavorite;
