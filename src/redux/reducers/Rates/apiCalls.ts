import { axiosInstance } from "../../../utils/axios/axiosInstance";
import { newRate } from "./models";
import {
  fetchingRate,
  fetchRateSuccess,
  fetchRateFailed,
  fetchingRateById,
  fetchRateByIdSuccess,
  createingRate,
  createRateSuccess,
  createRateFailed,
  updatingRate,
  updateRateSuccess,
  updateRateFailed,
  deletingRate,
  deleteRateSuccess,
  deleteRateFailed,
} from "./rateSlice";

export const getAllRates = async (dispatch: any) => {
  dispatch(fetchingRate());
  try {
    const res = await axiosInstance.get("rates/all");
    dispatch(fetchRateSuccess(res.data));
  } catch (err) {
    dispatch(fetchRateFailed(err));
  }
};

export const getRateById = async (dispatch: any, id: string) => {
  dispatch(fetchingRateById());
  try {
    const res = await axiosInstance.get(`Rates/GetRateById/${id}`);
    dispatch(fetchRateByIdSuccess(res.data));
  } catch (err) {
    dispatch(fetchRateByIdSuccess(err));
  }
};

export const createRates = async (dispatch: any, payload: newRate) => {
  dispatch(createingRate());
  try {
    const res = await axiosInstance.post("rates", payload);
    dispatch(createRateSuccess(res.data));
  } catch (err) {
    dispatch(createRateFailed(err));
  }
};

export const updateRate = async (
  dispatch: any,
  payload: { id: string; updateData: newRate }
) => {
  dispatch(updatingRate());
  try {
    const res = await axiosInstance.put(
      `Rates/${payload.id}`,
      payload.updateData
    );
    dispatch(updateRateSuccess(res.data));
  } catch (err) {
    dispatch(updateRateFailed(err));
  }
};

export const deleteRate = async (dispatch: any, id: string) => {
  dispatch(deletingRate());
  try {
    const res = await axiosInstance.delete(`rates/${id}`);
    dispatch(deleteRateSuccess(res.data));
  } catch (err) {
    dispatch(deleteRateFailed(err));
  }
};
