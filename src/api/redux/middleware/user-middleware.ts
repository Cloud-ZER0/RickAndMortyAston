import { clearFavoriteLocal } from "../slices/favorite";
import { getFavorite } from "../thunks/favorite-thunk";
import { getHistory } from "../thunks/history-thunk";

export const userMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type === "userSlice/setUser") {
    store.dispatch(getHistory(action.payload.token));
    store.dispatch(getFavorite(action.payload.token));
    return next(action);
  }
  if (action.type === "userSlice/removeUser") {
    store.dispatch(clearFavoriteLocal());
    return next(action);
  }
  return next(action);
};
