import React, { useEffect } from "react";
import Tracks from "./Tracks";
import { useDispatch } from "react-redux";
import { setTracks } from "../redux/actions/track-actions";
import axios from "axios";

const PersonalRecordTimes = () => {
  const dispatch = useDispatch();
  const getTracks = async () => {
    const response = await axios
      .get("http://127.0.0.1:5500/mock_data/tracks.json")
      .catch((err) => console.log(err));
    dispatch(setTracks(response.data));
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div>
      <h1>World Record Times!</h1>
      <Tracks></Tracks>
    </div>
  );
};

export default PersonalRecordTimes;
