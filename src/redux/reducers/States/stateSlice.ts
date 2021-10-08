import { createSlice } from "@reduxjs/toolkit";
import { stateState } from "./stateState";

export const stateSlice = createSlice({
  name: "States",
  initialState: stateState,
  reducers: {
    //fetching
    fetchingState: (state) => {
      state.fetching = true;
    },
    fetchStateSuccess: (state, action) => {
      state.fetching = false;
      state.fetchData = action.payload.data;
    },
    fetchStateFailed: (state, action) => {
      state.fetching = false;
      state.fetchError = action.payload;
    },
    //fetching by id
    fetchingStateById: (state) => {
      state.fetchingById = true;
    },
    fetchStateByIdSuccess: (state, action) => {
      state.fetchingById = false;
      state.fetchByIdData = action.payload;
    },
    fetchStateByIdFailed: (state, action) => {
      state.fetchingById = false;
      state.fetchByIdError = action.payload;
    },
    //creating
    createingState: (state) => {
      state.creating = true;
    },
    createStateSuccess: (state, action) => {
      state.creating = false;
      state.createData = action.payload;
    },
    createStateFailed: (state, action) => {
      state.creating = false;
      state.createError = action.payload;
    },
    //updating
    updatingState: (state) => {
      state.updating = true;
    },
    updateStateSuccess: (state, action) => {
      state.updating = false;
      state.updateData = action.payload;
    },
    updateStateFailed: (state, action) => {
      state.updating = false;
      state.updateError = action.payload;
    },
    //deleting
    deletingState: (state) => {
      state.deleting = true;
    },
    deleteStateSuccess: (state, action) => {
      state.fetching = false;
      state.deleteData = action.payload;
    },
    deleteStateFailed: (state, action) => {
      state.deleting = false;
      state.deleteError = action.payload;
    },
    //reset
    resetState: (state) => {
      //processing
      state.fetching = false;
      state.fetchingById = false;
      state.creating = false;
      state.updating = false;
      state.deleting = false;
      //data
      state.fetchData = [];
      state.fetchByIdData = null;
      state.createData = null;
      state.updateData = null;
      state.deleteData = null;
      //error
      state.fetchError = null;
      state.fetchByIdError = null;
      state.createError = null;
      state.updateError = null;
      state.deleteError = null;
    }
  },
});

export const {
  //fetching
  fetchingState,
  fetchingStateById,
  createingState,
  updatingState,
  deletingState,
  //success
  fetchStateByIdSuccess,
  fetchStateSuccess,
  createStateSuccess,
  updateStateSuccess,
  deleteStateSuccess,
  //failed
  fetchStateFailed,
  fetchStateByIdFailed,
  createStateFailed,
  updateStateFailed,
  deleteStateFailed,
  //reset
  resetState
} = stateSlice.actions;

export default stateSlice.reducer;
