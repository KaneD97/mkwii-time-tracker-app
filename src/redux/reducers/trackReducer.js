import { ActionTypes } from "../constants/action-types";

const initialState = { tracks: [] };

export const trackReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TRACKS:
      return { ...state, tracks: payload };

    default:
      return state;
  }
};
