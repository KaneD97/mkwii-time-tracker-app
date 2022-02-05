import React, { useEffect } from "react";
import TrackComponent from "./TrackComponent";
import data from "../data/tracks.json";
import { useDispatch } from "react-redux";
import { setTracks } from "../redux/actions/track-actions";

const PersonalRecordTimes = () => {
  const dispatch = useDispatch();
  const getTracks = () => {
    dispatch(setTracks(data));
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div>
      <h1>World Record Times!</h1>
      <TrackComponent></TrackComponent>
    </div>
  );
};

export default PersonalRecordTimes;
