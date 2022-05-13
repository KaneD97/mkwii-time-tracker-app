import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TrackTimesList from "../components/TrackTimesList";
import {
  removeSelectedTrack,
  setSelectedTrack,
  setTrackTimes,
} from "../redux/actions/track-actions";
import { getTracks } from "../utils";

const TrackTimes = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const track = useSelector((state) => state.selectedTrack);
  const tracks = useSelector((state) => state.allTracks.tracks);

  const trackTimes = useSelector((state) => state.trackTimes.trackTimes);
  const getSelectedTrack = () => {
    const selectedTrack = tracks.find((track) => track.id.toString() === id);
    dispatch(setSelectedTrack(selectedTrack));
  };

  const getTrackTimes = async () => {
    const response = await axios
      .get("http://127.0.0.1:5500/mock_data/track_times.json")
      .catch((err) => console.log(err));
    dispatch(setTrackTimes(response.data));
  };

  useEffect(() => {
    if (id && id !== "") {
      getSelectedTrack();
      getTracks(dispatch);
    }
    return () => {
      dispatch(removeSelectedTrack());
    };
  }, [id, tracks]);

  useEffect(() => {
    getTrackTimes();
  }, []);

  return <TrackTimesList track={track} trackTimes={trackTimes} />;
};

export default TrackTimes;
