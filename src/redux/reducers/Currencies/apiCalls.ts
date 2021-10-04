import { axiosInstance } from "../../../utils/axios/axiosInstance";
import { newCurrency } from "./models";
import {
  fetchingAC,
  fetchACSuccess,
  fetchACFailed,
  fetchingACById,
  fetchACByIdSuccess,
  createingAC,
  createACSuccess,
  createACFailed,
  updatingAC,
  updateACSuccess,
  updateACFailed,
  deletingAC,
  deleteACSuccess,
  deleteACFailed,
} from "./currencySlice";

export const getAllCurrency = async (dispatch: any) => {
  dispatch(fetchingAC());
  try {
    const res = await axiosInstance.get("currencies");
    dispatch(fetchACSuccess(res));
  } catch (err) {
    dispatch(fetchACFailed(err));
  }
};

export const getCurrencyById = async (dispatch: any, id: string) => {
  dispatch(fetchingACById());
  try {
    const res = await axiosInstance.get(
      `Currencies/GetCurrencyById/${id}`
    );
    dispatch(fetchACByIdSuccess(res.data));
  } catch (err) {
    dispatch(fetchACByIdSuccess(err));
  }
};

export const createCurrency = async (
  dispatch: any,
  payload: newCurrency
) => {
  dispatch(createingAC());
  try {
    const res = await axiosInstance.post("Currencies", payload);
    dispatch(createACSuccess(res.data));
  } catch (err) {
    dispatch(createACFailed(err));
  }
};

export const updateCurrency = async (
  dispatch: any,
  payload: { id: string; updateData: newCurrency }
) => {
  dispatch(updatingAC());
  try {
    const res = await axiosInstance.patch(
      `Currencies/${payload.id}`,
      payload.updateData
    );
    dispatch(updateACSuccess(res.data));
  } catch (err) {
    dispatch(updateACFailed(err));
  }
};

export const deleteCurrency = async (dispatch: any, id: string) => {
  dispatch(deletingAC());
  try {
    const res = await axiosInstance.delete(`Currencies/${id}`);
    dispatch(deleteACSuccess(res.data));
  } catch (err) {
    dispatch(deleteACFailed(err));
  }
};
