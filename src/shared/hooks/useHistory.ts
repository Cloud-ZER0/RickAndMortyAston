import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../api/redux/store";
import {
  clearHistory,
  removeQuery,
  setHistory,
} from "../../api/redux/thunks/history-thunk";
import { selectUid } from "../../api/redux/selectors";
import {
  onNotifyClearHistory,
  onNotifyHistoryRemoved,
} from "../utils/notification";
const useHistory = () => {
  const { data, isLoading, isError } = useAppSelector((state) => state.history);
  const uid = useAppSelector(selectUid);
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
        onNotifyHistoryRemoved();
      }
    },
    [dispatch, uid]
  );

  const clearUserHistory = useCallback(() => {
    if (uid) {
      dispatch(clearHistory(uid));
      onNotifyClearHistory();
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
