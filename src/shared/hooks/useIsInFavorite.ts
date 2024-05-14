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
import {
  onNotifyFavoriteAdded,
  onNotifyFavoriteRemoved,
} from "../utils/notification";
import useModal from "./useModal";

const useIsInFavorite = (cardId: number) => {
  const [is, setIs] = useState(false);
  const uid = useAppSelector(selectUid);
  const data = useAppSelector(selectFavorite);
  const isLoading = useAppSelector(selectIsFavoriteLoading);
  const isError = useAppSelector(selectIsFavoriteError);
  const { isOpen, onToggleModal } = useModal();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data && data.find((el) => el === cardId.toString())) {
      setIs(true);
    } else {
      setIs(false);
    }
  }, [data, setIs, cardId]);

  const onTogleFavorite = useCallback(() => {
    if (uid) {
      if (is) {
        setIs(false);
        dispatch(removeFavorite({ uid: uid, cardId: cardId }));
        onNotifyFavoriteRemoved();
      } else {
        setIs(true);
        dispatch(setFavorite({ uid: uid, cardId: cardId }));
        onNotifyFavoriteAdded();
      }
    } else {
      onToggleModal();
    }
  }, [uid, setIs, dispatch, cardId, is, onToggleModal]);

  return {
    favorite: {
      isInfavorite: is,
      onTogleFavorite,
      isLoading,
      isError,
    },
    modal: {
      isModalOpen: isOpen,
      onToggleModal,
    },
  };
};

export default useIsInFavorite;
