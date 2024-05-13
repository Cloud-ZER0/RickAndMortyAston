import { configureStore } from "@reduxjs/toolkit";
import { cardApi } from "./api/card-api";
import { userSlice } from "./slices/user";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userMiddleware } from "./middleware/user-middleware";
import { historySlice } from "./slices/history";
import { favoriteSlice } from "./slices/favorite";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    history: historySlice.reducer,
    favorite: favoriteSlice.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userMiddleware, cardApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
