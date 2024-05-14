import { createSlice } from "@reduxjs/toolkit";
import {
  claerFavorite,
  getFavorite,
  removeFavorite,
  setFavorite,
} from "../thunks/favorite-thunk";

interface Favorite {
  data: number[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: Favorite = {
  data: [],
  isLoading: false,
  isError: false,
};

export const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getFavorite.fulfilled,
        (state, { payload }: { payload: number[] }) => {
          state.data = payload;
          state.isLoading = false;
        }
      )
      .addCase(getFavorite.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(setFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        setFavorite.fulfilled,
        (state, { payload }: { payload: number }) => {
          state.isLoading = false;

          state.data.push(payload);
        }
      )
      .addCase(setFavorite.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(removeFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        removeFavorite.fulfilled,
        (state, { payload }: { payload: number }) => {
          state.isLoading = false;
          state.data = state.data.filter((el) => el !== payload);
        }
      )
      .addCase(removeFavorite.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(claerFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(claerFavorite.fulfilled, (state) => {
        state.isLoading = false;
        state.data = [];
      })
      .addCase(claerFavorite.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
