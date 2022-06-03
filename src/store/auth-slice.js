import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: null,
  },
  reducers: {
    setUserName: (state) => {
      state.userName = "msanad";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
