import { createSlice } from "@reduxjs/toolkit";
import { currencyState } from "./currencyState";

export const currencySlice = createSlice({
  name: "Currencies",
  initialState: currencyState,
  reducers: {
    //fetching
    fetchingAC: (state) => {
      state.fetching = true;
    },
    fetchACSuccess: (state, action) => {
      state.fetching = false;
      state.fetchData = action.payload.data;
    },
    fetchACFailed: (state, action) => {
      state.fetching = false;
      state.fetchError = action.payload;
    },
    //fetching by id
    fetchingACById: (state) => {
      state.fetchingById = true;
    },
    fetchACByIdSuccess: (state, action) => {
      state.fetchingById = false;
      state.fetchByIdData = action.payload;
    },
    fetchACByIdFailed: (state, action) => {
      state.fetchingById = false;
      state.fetchByIdError = action.payload;
    },
    //creating
    createingAC: (state) => {
      state.creating = true;
    },
    createACSuccess: (state, action) => {
      state.creating = false;
      state.createData = action.payload;
    },
    createACFailed: (state, action) => {
      state.creating = false;
      state.createError = action.payload;
    },
    //updating
    updatingAC: (state) => {
      state.updating = true;
    },
    updateACSuccess: (state, action) => {
      state.updating = false;
      state.updateData = action.payload;
    },
    updateACFailed: (state, action) => {
      state.updating = false;
      state.updateError = action.payload;
    },
    //deleting
    deletingAC: (state) => {
      state.deleting = true;
    },
    deleteACSuccess: (state, action) => {
      state.fetching = false;
      state.deleteData = action.payload;
    },
    deleteACFailed: (state, action) => {
      state.deleting = false;
      state.deleteError = action.payload;
    },
    //reset
    resetCurrency: (state) => {
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
  fetchingAC,
  fetchingACById,
  createingAC,
  updatingAC,
  deletingAC,
  //success
  fetchACByIdSuccess,
  fetchACSuccess,
  createACSuccess,
  updateACSuccess,
  deleteACSuccess,
  //failed
  fetchACFailed,
  fetchACByIdFailed,
  createACFailed,
  updateACFailed,
  deleteACFailed,
  //reset
  resetCurrency
} = currencySlice.actions;

export default currencySlice.reducer;
