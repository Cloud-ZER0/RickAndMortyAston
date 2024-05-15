import { Middleware, ThunkDispatch } from "@reduxjs/toolkit";
import { clearFavoriteLocal } from "../slices/favorite";
import { getFavorite } from "../thunks/favorite-thunk";
import { getHistory } from "../thunks/history-thunk";
import { RootState } from "../store";

export const userMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action: any) => {
    if (action.type === "userSlice/setUser") {
      (store.dispatch as ThunkDispatch<RootState, unknown, any>)(
        getHistory(action.payload.token)
      );
      (store.dispatch as ThunkDispatch<RootState, unknown, any>)(
        getFavorite(action.payload.token)
      );
      return next(action);
    }
    if (action.type === "userSlice/removeUser") {
      store.dispatch(clearFavoriteLocal());
      return next(action);
    }
    return next(action);
  };
