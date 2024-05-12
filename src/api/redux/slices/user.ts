import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string | null;
  email: string | null;
  token: string | null;
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
      state.name = null;
      state.email = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
