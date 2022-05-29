import axios from "axios";
import { setTracks, setTrackTimes } from "./redux/actions/track-actions";

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
  const response = await axios
    .get("http://localhost:3000/tracks")
    .catch((err) => console.log(err));
  dispatch(setTracks(response.data));
};

export const getTrackTimes = async (dispatch) => {
  const response = await axios
    .get("http://127.0.0.1:5500/mock_data/track_times.json")
    .catch((err) => console.log(err));
  dispatch(setTrackTimes(response.data));
  return response;
};
