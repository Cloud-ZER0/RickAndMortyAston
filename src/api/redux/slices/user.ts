import { createSlice } from "@reduxjs/toolkit";

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
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
