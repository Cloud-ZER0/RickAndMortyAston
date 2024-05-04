import { configureStore } from "@reduxjs/toolkit";
import { cardApi } from "./api/card-api";
import { userSlice } from "./slices/user";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: { user: userSlice.reducer, [cardApi.reducerPath]: cardApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
