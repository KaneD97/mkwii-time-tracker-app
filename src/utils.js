import axios from 'axios';
import { setTracks, setTrackTimes } from './redux/actions/track-actions';

export const getDateTimeToday = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
};

export const getTracks = async (dispatch) => {
  const response = await axios.get('http://localhost:3000/tracks').catch((err) => console.log(err));
  dispatch(setTracks(response.data));
};

export const getTrackTimes = async (dispatch, trackId, trackTimeId) => {
  if (trackId) {
    const response = await axios.get(`http://localhost:3000/times/track/${trackId}`).catch((err) => console.log(err));
    dispatch(setTrackTimes(response.data));
    return response;
  } else if (trackTimeId) {
    const response = await axios.get(`http://localhost:3000/times/${trackTimeId}`).catch((err) => console.log(err));
    dispatch(setTrackTimes(response.data));
    return response;
  }
};
