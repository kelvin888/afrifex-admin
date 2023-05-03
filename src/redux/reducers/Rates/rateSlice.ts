import { createSlice } from "@reduxjs/toolkit";
import { ratesState } from "./ratesState";

export const rateSlice = createSlice({
  name: "rates",
  initialState: ratesState,
  reducers: {
    //fetching
    fetchingRate: (state) => {
      state.fetching = true;
    },
    fetchRateSuccess: (state, action) => {
      state.fetching = false;
      state.fetchData = action.payload;
    },
    fetchRateFailed: (state, action) => {
      state.fetching = false;
      state.fetchError = action.payload;
    },
    //fetching by id
    fetchingRateById: (state) => {
      state.fetchingById = true;
    },
    fetchRateByIdSuccess: (state, action) => {
      state.fetchingById = false;
      state.fetchByIdData = action.payload;
    },
    fetchRateByIdFailed: (state, action) => {
      state.fetchingById = false;
      state.fetchByIdError = action.payload;
    },
    //creating
    createingRate: (state) => {
      state.creating = true;
    },
    createRateSuccess: (state, action) => {
      state.creating = false;
      state.createData = action.payload;
    },
    createRateFailed: (state, action) => {
      state.creating = false;
      state.createError = action.payload;
    },
    //updating
    updatingRate: (state) => {
      state.updating = true;
    },
    updateRateSuccess: (state, action) => {
      state.updating = false;
      state.updateData = action.payload;
    },
    updateRateFailed: (state, action) => {
      state.updating = false;
      state.updateError = action.payload;
    },
    //deleting
    deletingRate: (state) => {
      state.deleting = true;
    },
    deleteRateSuccess: (state, action) => {
      state.deleting = false;
      state.deleteData = action.payload;
    },
    deleteRateFailed: (state, action) => {
      state.deleting = false;
      state.deleteError = action.payload;
    },
    //reset
    resetRate: (state) => {
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
    },
  },
});

export const {
  //fetching
  fetchingRate,
  fetchingRateById,
  createingRate,
  updatingRate,
  deletingRate,
  //success
  fetchRateByIdSuccess,
  fetchRateSuccess,
  createRateSuccess,
  updateRateSuccess,
  deleteRateSuccess,
  //failed
  fetchRateFailed,
  fetchRateByIdFailed,
  createRateFailed,
  updateRateFailed,
  deleteRateFailed,
  //reset
  resetRate,
} = rateSlice.actions;

export default rateSlice.reducer;
