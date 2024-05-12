import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearUserHistory,
  getUserhistory,
  removeQueryFromHistory,
  setUserHistory,
} from "../../../shared/firebase/actions/db-actions";

interface DataType {
  userId: string;
  query: string;
}

export const getHistory = createAsyncThunk(
  "user/getHistory",
  async (userId: string) => {
    const history = await getUserhistory(userId);

    return history;
  }
);

export const setHistory = createAsyncThunk(
  "setHistory",
  async (data: DataType) => {
    await setUserHistory(data.userId, data.query);
    return data.query;
  }
);

export const removeQuery = createAsyncThunk(
  "removeQueryFromHistory",
  async (data: DataType) => {
    await removeQueryFromHistory(data.userId, data.query);
    return data.query;
  }
);

export const clearHistory = createAsyncThunk(
  "clearHistory",
  async (uid: string) => {
    await clearUserHistory(uid);
  }
);
