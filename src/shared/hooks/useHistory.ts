import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../api/redux/store";
import {
  clearHistory,
  removeQuery,
  setHistory,
} from "../../api/redux/thunks/history-thunk";
const useHistory = () => {
  const { data, isLoading, isError } = useAppSelector((state) => state.history);
  const uid = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();

  const addToHistory = useCallback(
    (query: string) => {
      if (uid) {
        dispatch(
          setHistory({
            userId: uid,
            query: query,
          })
        );
      }
    },
    [dispatch, uid]
  );

  const removeFromHistory = useCallback(
    (query: string) => {
      if (uid) {
        dispatch(
          removeQuery({
            userId: uid,
            query: query,
          })
        );
      }
    },
    [dispatch, uid]
  );

  const clearUserHistory = useCallback(() => {
    if (uid) {
      dispatch(clearHistory(uid));
    }
  }, [dispatch, uid]);

  return {
    data,
    isLoading,
    isError,
    addToHistory,
    removeFromHistory,
    clearUserHistory,
  };
};

export default useHistory;
