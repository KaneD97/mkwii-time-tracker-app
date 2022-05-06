import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTimeForm from "../components/AddTimeForm";
import { setSelectedTrack, setTracks } from "../redux/actions/track-actions";
import axios from "axios";
import { getDateTimeToday } from "../utils";

const AddTime = () => {
  const tracks = useSelector((state) => state.allTracks.tracks).map(
    (track) => ({
      key: track.id,
      value: track.name,
      text: track.name,
      has_shortcut: track.has_shortcut,
    })
  );
  const shortcutBreakdown = useSelector(
    (state) => state.shortcutBreakdown.data
  );
  const [track, setTrack] = useState("");
  const [time, setTime] = useState("");

  const dispatch = useDispatch();

  const getTracks = async () => {
    const response = await axios
      .get("http://127.0.0.1:5500/mock_data/tracks.json")
      .catch((err) => console.log(err));
    dispatch(setTracks(response.data));
  };

  const handleTrackChange = ({ target }) => {
    const selectedTrack = tracks.find((t) => t.value === target.innerText);
    if (selectedTrack) {
      setTrack(selectedTrack);
      dispatch(setSelectedTrack(selectedTrack));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validTimeRegExp = /0[0-2]:[0-5][0-9].[0-9][0-9][0-9]/g;
    if (!validTimeRegExp.test(time)) {
      alert("Invalid time entered!");
    } else if (track === "") {
      alert("Forgot to select track!");
    } else {
      alert(`Your time ${time} has been submitted! for ${track.value}`);
      const dateAchieved = getDateTimeToday();
      const formData = {
        time,
        name: track.value,
        id: track.key,
        dateAchieved,
        shortcutBreakdown,
      };
      console.log(formData);
    }
  };

  const handleInputChange = ({ target }) => {
    const lettersRegExp = /[a-zA-Z]/g;
    if (!lettersRegExp.test(target.value)) {
      setTime(target.value);
    }
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
        time={time}
        handleTrackChange={handleTrackChange}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      ></AddTimeForm>
    </div>
  );
};

export default AddTime;
