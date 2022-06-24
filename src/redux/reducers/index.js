import { combineReducers } from 'redux';
import { selectedTrackReducer, shortcutBreakdownReducer, trackReducer, trackTimeReducer } from './trackReducer';

export const reducers = combineReducers({
  allTracks: trackReducer,
  selectedTrack: selectedTrackReducer,
  shortcutBreakdown: shortcutBreakdownReducer,
  trackTimes: trackTimeReducer,
});
