import { createSlice } from "@reduxjs/toolkit";

// Slice
const rootSlice = createSlice({
  name: "FYP-Portal",

  initialState: {
    user: null,
    allsignupState: [],
    groupState: [],
    studentState: [],
    projectsState: [],
    tasksState: []

  },

  reducers: {

    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    signUp: (state, action) => { state.allsignupState = action.payload },
    GroupRed: (state, action) => { state.groupState = action.payload },
    StudentRed: (state, action) => { state.studentState = action.payload },
    ProjectRed: (state, action) => { state.projectsState = action.payload },
    TaskRed: (state, action) => { state.tasksState = action.payload }
  },
});

// Actions
export const { logIn, logOut, signUp, GroupRed, StudentRed, ProjectRed, TaskRed } = rootSlice.actions;
export const reducer = rootSlice.reducer;
