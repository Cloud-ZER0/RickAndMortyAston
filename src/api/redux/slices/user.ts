import { createSlice } from "@reduxjs/toolkit";

// Я посмотрел репозитории людей с прошлого потока, многие из них создают для истории и избранного отдельный state.
// Можно ли использовать один глобальный state User, который хранит все данные о пользователе, в том числе избранное и историю?
// Или лучше все таки разделить на несколько stor'ов?

interface User {
  name: String | null;
  email: String | null;
  token: String | null;
}

const initialState: User = {
  name: null,
  email: null,
  token: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    setUser(state, { payload }: { payload: User }) {
      state.email = payload.email;
      state.token = payload.token;
      state.name = payload.name;
    },
    removeUser(state) {
      state = initialState;
      console.log("state removed");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
