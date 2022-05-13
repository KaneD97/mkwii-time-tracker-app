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

export const setTrackTimes = (trackTimes) => {
  return {
    type: ActionTypes.SET_TRACK_TIMES,
    payload: trackTimes,
  };
};

export const setShortcutBreakdown = (shortcutBreakdown) => {
  return {
    type: ActionTypes.SET_SHORTCUT_BREAKDOWN,
    payload: shortcutBreakdown,
  };
};

export const setLapShortcut = (lapShortcut) => {
  return {
    type: ActionTypes.LAP_SHORTCUT_UPDATED,
    payload: lapShortcut,
  };
};
