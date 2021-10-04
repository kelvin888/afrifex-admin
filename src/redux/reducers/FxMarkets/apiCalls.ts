import { axiosInstance } from "../../../utils/axios/axiosInstance";
import { newFxMarket } from "./models";
import {
  fetchingFxMarket,
  fetchFxMarketSuccess,
  fetchFxMarketFailed,
  fetchingFxMarketById,
  fetchFxMarketByIdSuccess,
  createingFxMarket,
  createFxMarketSuccess,
  createFxMarketFailed,
  updatingFxMarket,
  updateFxMarketSuccess,
  updateFxMarketFailed,
  deletingFxMarket,
  deleteFxMarketSuccess,
  deleteFxMarketFailed,
} from "./fxMarketSlice";

export const getAllFxMarket = async (dispatch: any) => {
  dispatch(fetchingFxMarket());
  try {
    const res = await axiosInstance.get("fxmarketlocations");
    dispatch(fetchFxMarketSuccess(res));
  } catch (err) {
    dispatch(fetchFxMarketFailed(err));
  }
};

export const getFxMarketById = async (dispatch: any, id: string) => {
  dispatch(fetchingFxMarketById());
  try {
    const res = await axiosInstance.get(
      `fxmarketlocations/${id}`
    );
    dispatch(fetchFxMarketByIdSuccess(res.data));
  } catch (err) {
    dispatch(fetchFxMarketByIdSuccess(err));
  }
};

export const createFxMarket = async (
  dispatch: any,
  payload: newFxMarket
) => {
  dispatch(createingFxMarket());
  try {
    const res = await axiosInstance.post("fxmarketlocations", payload);
    dispatch(createFxMarketSuccess(res.data));
  } catch (err) {
    dispatch(createFxMarketFailed(err));
  }
};

export const updateFxMarket = async (
  dispatch: any,
  payload: { id: string; updateData: newFxMarket }
) => {
  dispatch(updatingFxMarket());
  try {
    const res = await axiosInstance.put(
      `fxmarketlocations/${payload.id}`,
      payload.updateData
    );
    dispatch(updateFxMarketSuccess(res.data));
  } catch (err) {
    dispatch(updateFxMarketFailed(err));
  }
};

export const deleteFxMarket = async (dispatch: any, id: string) => {
  dispatch(deletingFxMarket());
  try {
    const res = await axiosInstance.delete(`fxmarketlocations/${id}`);
    dispatch(deleteFxMarketSuccess(res.data));
  } catch (err) {
    dispatch(deleteFxMarketFailed(err));
  }
};
