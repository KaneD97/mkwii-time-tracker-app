import { ActionTypes } from "../constants/action-types";

export const setTracks = (tracks) => {
  return {
    type: ActionTypes.SET_TRACKS,
    payload: tracks,
  };
};

export const setSelectedTrack = (track) => {
  return {
    type: ActionTypes.SELECTED_TRACK,
    payload: track,
  };
};

export const removeSelectedTrack = () => {
  return {
    type: ActionTypes.REMOVE_TRACK,
  };
};
