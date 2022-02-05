import { combineReducers } from "redux";
import { trackReducer } from "./trackReducer";

export const reducers = combineReducers({
  allTracks: trackReducer,
});
