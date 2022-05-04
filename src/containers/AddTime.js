import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTimeForm from "../components/AddTimeForm";
import { setSelectedTrack, setTracks } from "../redux/actions/track-actions";
import axios from "axios";

const AddTime = () => {
  const tracks = useSelector((state) => state.allTracks.tracks).map(
    (track) => ({
      key: track.id,
      value: track.name,
      text: track.name,
      has_shortcut: track.has_shortcut,
    })
  );
  const [track, setTrack] = useState("");

  const dispatch = useDispatch();

  const getTracks = async () => {
    const response = await axios
      .get("http://127.0.0.1:5500/mock_data/tracks.json")
      .catch((err) => console.log(err));
    dispatch(setTracks(response.data));
  };

  const handleTrackChange = ({ target }) => {
    const selectedTrack = tracks.find((t) => t.value === target.innerText);
    setTrack(selectedTrack);
    dispatch(setSelectedTrack(selectedTrack));
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div>
      <h1>Add Time</h1>
      <AddTimeForm
        tracks={tracks}
        track={track}
        handleTrackChange={handleTrackChange}
      ></AddTimeForm>
    </div>
  );
};

export default AddTime;
