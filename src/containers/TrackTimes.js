import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TrackTimesList from "../components/TrackTimesList";
import {
  removeSelectedTrack,
  setSelectedTrack,
} from "../redux/actions/track-actions";

const TrackTimes = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const track = useSelector((state) => state.selectedTrack);
  const tracks = useSelector((state) => state.allTracks.tracks);
  const getSelectedTrack = () => {
    const selectedTrack = tracks.find((track) => track.id.toString() === id);
    dispatch(setSelectedTrack(selectedTrack));
  };

  useEffect(() => {
    if (id && id !== "") getSelectedTrack();
    return () => {
      dispatch(removeSelectedTrack());
    };
  }, [id]);

  return <TrackTimesList track={track} />;
};

export default TrackTimes;
