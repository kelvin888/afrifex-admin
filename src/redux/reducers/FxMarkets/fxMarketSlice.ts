import { createSlice } from "@reduxjs/toolkit";
import { fxMarketState } from "./fxMarketState";

export const fxMarketSlice = createSlice({
  name: "FxMarkets",
  initialState: fxMarketState,
  reducers: {
    //fetching
    fetchingFxMarket: (state) => {
      state.fetching = true;
    },
    fetchFxMarketSuccess: (state, action) => {
      state.fetching = false;
      state.fetchData = action.payload.data;
    },
    fetchFxMarketFailed: (state, action) => {
      state.fetching = false;
      state.fetchError = action.payload;
    },
    //fetching by id
    fetchingFxMarketById: (state) => {
      state.fetchingById = true;
    },
    fetchFxMarketByIdSuccess: (state, action) => {
      state.fetchingById = false;
      state.fetchByIdData = action.payload;
    },
    fetchFxMarketByIdFailed: (state, action) => {
      state.fetchingById = false;
      state.fetchByIdError = action.payload;
    },
    //creating
    createingFxMarket: (state) => {
      state.creating = true;
    },
    createFxMarketSuccess: (state, action) => {
      state.creating = false;
      state.createData = action.payload;
    },
    createFxMarketFailed: (state, action) => {
      state.creating = false;
      state.createError = action.payload;
    },
    //updating
    updatingFxMarket: (state) => {
      state.updating = true;
    },
    updateFxMarketSuccess: (state, action) => {
      state.updating = false;
      state.updateData = action.payload;
    },
    updateFxMarketFailed: (state, action) => {
      state.updating = false;
      state.updateError = action.payload;
    },
    //deleting
    deletingFxMarket: (state) => {
      state.deleting = true;
    },
    deleteFxMarketSuccess: (state, action) => {
      state.deleting = false;
      state.deleteData = action.payload;
    },
    deleteFxMarketFailed: (state, action) => {
      state.deleting = false;
      state.deleteError = action.payload;
    },
    //reset
    resetFxMarket: (state) => {
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
  fetchingFxMarket,
  fetchingFxMarketById,
  createingFxMarket,
  updatingFxMarket,
  deletingFxMarket,
  //success
  fetchFxMarketByIdSuccess,
  fetchFxMarketSuccess,
  createFxMarketSuccess,
  updateFxMarketSuccess,
  deleteFxMarketSuccess,
  //failed
  fetchFxMarketFailed,
  fetchFxMarketByIdFailed,
  createFxMarketFailed,
  updateFxMarketFailed,
  deleteFxMarketFailed,
  //reset
  resetFxMarket
} = fxMarketSlice.actions;

export default fxMarketSlice.reducer;
