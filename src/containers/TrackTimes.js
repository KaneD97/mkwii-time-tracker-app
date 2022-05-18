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
import { getTracks, getTrackTimes } from "../utils";

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

  useEffect(() => {
    getSelectedTrack();
  }, [tracks]);

  useEffect(() => {
    if (id && id !== "") {
      getTracks(dispatch);
    }
    return () => {
      dispatch(removeSelectedTrack());
    };
  }, [id]);

  useEffect(() => {
    getTrackTimes(dispatch);
  }, []);

  return <TrackTimesList track={track} trackTimes={trackTimes} />;
};

export default TrackTimes;
