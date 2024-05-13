import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearUserFavorite,
  getUserFavorite,
  removeItemFromFavorite,
  setUserFavorite,
} from "../../../shared/firebase/actions/db-actions";

interface ThunkArgs {
  uid: string;
  cardId: string;
}

export const getFavorite = createAsyncThunk(
  "favoriteSlice/getFavorite",
  async (uid: string) => {
    return await getUserFavorite(uid);
  }
);

export const setFavorite = createAsyncThunk(
  "favoriteSlice/setFavorite",
  async (args: ThunkArgs) => {
    await setUserFavorite(args.uid, args.cardId);
    return args.cardId;
  }
);

export const removeFavorite = createAsyncThunk(
  "favoriteSlice/removeFavorite",
  async (args: ThunkArgs) => {
    await removeItemFromFavorite(args.uid, args.cardId);
    return args.cardId;
  }
);

export const claerFavorite = createAsyncThunk(
  "favoriteSlice/clearFavorite",
  async (uid: string) => {
    await clearUserFavorite(uid);
  }
);
