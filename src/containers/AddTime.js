import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTimeForm from "../components/AddTimeForm";
import { setSelectedTrack } from "../redux/actions/track-actions";
import { getDateTimeToday, getTracks } from "../utils";

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
  const [format, setFormat] = useState("non_shortcut");

  const dispatch = useDispatch();

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
        format,
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

  const handleFormat = ({ target }) => {
    const format = target.innerText.replace(" ", "_").toLowerCase();
    setFormat(format);
  };

  useEffect(() => {
    getTracks(dispatch);
  }, []);

  return (
    <div>
      <h1>Add Time</h1>
      <AddTimeForm
        tracks={tracks}
        track={track}
        time={time}
        format={format}
        handleFormat={handleFormat}
        handleTrackChange={handleTrackChange}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      ></AddTimeForm>
    </div>
  );
};

export default AddTime;
