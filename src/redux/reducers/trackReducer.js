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

export const selectedTrackReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_TRACK:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_TRACK:
      return {};
    default:
      return state;
  }
};

export const shortcutBreakdownReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SHORTCUT_BREAKDOWN:
      return { data: payload };
    case ActionTypes.LAP_SHORTCUT_UPDATED:
      return {
        data: state.data.map((lapShortcut) => {
          if (
            lapShortcut.lap === payload.lapCount &&
            lapShortcut.shortcutId === payload.shortcutId
          ) {
            return { ...lapShortcut, isChecked: payload.isChecked };
          }
          return lapShortcut;
        }),
      };
    default:
      return state;
  }
};
