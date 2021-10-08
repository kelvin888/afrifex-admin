import { axiosInstance } from "../../../utils/axios/axiosInstance";
import { newState } from "./models";
import {
  fetchingState,
  fetchStateSuccess,
  fetchStateFailed,
  fetchingStateById,
  fetchStateByIdSuccess,
  createingState,
  createStateSuccess,
  createStateFailed,
  updatingState,
  updateStateSuccess,
  updateStateFailed,
  deletingState,
  deleteStateSuccess,
  deleteStateFailed,
} from "./stateSlice";

export const getAllStates = async (dispatch: any) => {
  dispatch(fetchingState());
  try {
    const res = await axiosInstance.get("states");
    dispatch(fetchStateSuccess(res));
  } catch (err) {
    dispatch(fetchStateFailed(err));
  }
};

export const getStateById = async (dispatch: any, id: string) => {
  dispatch(fetchingStateById());
  try {
    const res = await axiosInstance.get(
      `States/GetStateById/${id}`
    );
    dispatch(fetchStateByIdSuccess(res.data));
  } catch (err) {
    dispatch(fetchStateByIdSuccess(err));
  }
};

export const createState = async (
  dispatch: any,
  payload: newState
) => {
  dispatch(createingState());
  try {
    const res = await axiosInstance.post("States", payload);
    dispatch(createStateSuccess(res.data));
  } catch (err) {
    dispatch(createStateFailed(err));
  }
};

export const updateState = async (
  dispatch: any,
  payload: { id: string; updateData: newState }
) => {
  dispatch(updatingState());
  try {
    const res = await axiosInstance.patch(
      `States/${payload.id}`,
      payload.updateData
    );
    dispatch(updateStateSuccess(res.data));
  } catch (err) {
    dispatch(updateStateFailed(err));
  }
};

export const deleteState = async (dispatch: any, id: string) => {
  dispatch(deletingState());
  try {
    const res = await axiosInstance.delete(`States/${id}`);
    dispatch(deleteStateSuccess(res.data));
  } catch (err) {
    dispatch(deleteStateFailed(err));
  }
};
