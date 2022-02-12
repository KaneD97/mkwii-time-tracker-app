import { combineReducers } from "redux";
import { selectedTrackReducer, trackReducer } from "./trackReducer";

export const reducers = combineReducers({
  allTracks: trackReducer,
  selectedTrack: selectedTrackReducer,
});
