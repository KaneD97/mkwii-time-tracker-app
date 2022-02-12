import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedTrack,
  setSelectedTrack,
} from "../redux/actions/track-actions";

const TrackTimesComponent = () => {
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

  return (
    <div>
      {Object.keys(track).length === 0 ? (
        <h1>Loading track times</h1>
      ) : (
        <h1>{track.name}</h1>
      )}
    </div>
  );
};

export default TrackTimesComponent;
