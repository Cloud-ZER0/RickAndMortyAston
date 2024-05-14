import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getUser = (state: RootState) => state.user;
export const getUserFavorite = (state: RootState) => state.favorite;

export const selectUid = createSelector([getUser], (user) => user.token);
export const selectFavorite = createSelector([getUserFavorite], (favr) => {
  return favr.data.map((el) => el.toString());
});
export const selectIsFavoriteLoading = createSelector(
  [getUserFavorite],
  (favr) => favr.isLoading
);
export const selectIsFavoriteError = createSelector(
  [getUserFavorite],
  (favr) => favr.isError
);
