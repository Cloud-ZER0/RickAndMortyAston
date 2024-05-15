import { addListener, createListenerMiddleware } from "@reduxjs/toolkit";
import { clearFavoriteLocal } from "../slices/favorite";
import { getFavorite } from "../thunks/favorite-thunk";
import { getHistory } from "../thunks/history-thunk";
import { AppDispatch, RootState } from "../store";
import { removeUser, setUser } from "../slices/user";
import { onNotifyError } from "../../../shared/utils/notification";

export const userMiddleware = createListenerMiddleware();
export const startUserMiddleware = userMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>();

startUserMiddleware({
  actionCreator: setUser,
  effect: async (action, listenerApi) => {
    if (action.payload.token) {
      listenerApi.dispatch(getHistory(action.payload.token));
      listenerApi.dispatch(getFavorite(action.payload.token));
    } else {
      onNotifyError();
    }
  },
});

startUserMiddleware({
  actionCreator: removeUser,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(clearFavoriteLocal());
  },
});

export const addAppListener = addListener.withTypes<RootState, AppDispatch>();
