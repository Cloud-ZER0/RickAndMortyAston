import { createSlice } from "@reduxjs/toolkit";
import {
  clearHistory,
  getHistory,
  removeQuery,
  setHistory,
} from "../thunks/history-thunk";

interface History {
  data: string[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: History = {
  data: [],
  isLoading: false,
  isError: false,
};

export const historySlice = createSlice({
  name: "historySlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getHistory.fulfilled,
        (state, { payload }: { payload: string[] }) => {
          state.isLoading = false;
          state.data = payload;
        }
      )
      .addCase(getHistory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(setHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        setHistory.fulfilled,
        (state, { payload }: { payload: string }) => {
          state.isLoading = false;
          if (state.data) {
            state.data = [...state.data, payload];
          } else {
            state.data = [payload];
          }
        }
      )
      .addCase(setHistory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(removeQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeQuery.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.data) {
          state.data = state.data.filter((query) => query !== payload);
        }
      })
      .addCase(removeQuery.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(clearHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(clearHistory.fulfilled, (state) => {
        state.isLoading = false;
        state.data = [];
      })
      .addCase(clearHistory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
