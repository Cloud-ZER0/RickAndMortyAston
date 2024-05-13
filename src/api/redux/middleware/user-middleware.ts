import { getFavorite } from "../thunks/favorite-thunk";
import { getHistory } from "../thunks/history-thunk";

export const userMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type === "userSlice/setUser") {
    console.log("inside middleware");
    store.dispatch(getHistory(action.payload.token));
    store.dispatch(getFavorite(action.payload.token));
    return next(action);
  }
  return next(action);
};
