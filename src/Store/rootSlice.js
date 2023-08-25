import { createSlice } from "@reduxjs/toolkit";

// Slice
const rootSlice = createSlice({
  name: "ccbudgetapp",

  initialState: {
    user: null,
    allsignupState: [],
  },

  reducers: {

    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    signUp: (state, action) => { state.allsignupState = action.payload },
  },
});

// Actions
export const { logIn, logOut, signUp } = rootSlice.actions;
export const reducer = rootSlice.reducer;
