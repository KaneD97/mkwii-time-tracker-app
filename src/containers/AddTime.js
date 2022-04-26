import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { setTracks } from "../redux/actions/track-actions";
import { getDateTimeToday } from "../utils";
import axios from "axios";

const AddTime = () => {
  const [time, setTime] = useState("");
  const [track, setTrack] = useState("");

  const tracks = useSelector((state) => state.allTracks.tracks).map(
    (track) => ({
      key: track.id,
      value: track.name,
      text: track.name,
      has_shortcut: track.has_shortcut,
    })
  );

  const shortcutOptions = [
    { key: 0, value: "Shortcut", text: "Shortcut" },
    { key: 1, value: "Non shortcut", text: "Non shortcut" },
  ];

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
      const formData = { time, name: track.value, id: track.key, dateAchieved };
      console.log(formData);
    }
  };

  const dispatch = useDispatch();

  const getTracks = async () => {
    const response = await axios
      .get("http://127.0.0.1:5500/mock_data/tracks.json")
      .catch((err) => console.log(err));
    dispatch(setTracks(response.data));
  };

  const handleInputChange = ({ target }) => {
    const lettersRegExp = /[a-zA-Z]/g;
    if (!lettersRegExp.test(target.value)) {
      setTime(target.value);
    }
  };

  const handleTrackChange = ({ target }) => {
    const selectedTrack = tracks.find((t) => t.value === target.innerText);
    setTrack(selectedTrack);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div>
      <h1>Add Time</h1>
      <form onSubmit={handleSubmit}>
        <Dropdown
          placeholder="Select track"
          search
          selection
          options={tracks}
          name="tracks"
          onChange={handleTrackChange}
          required
        />
        {track.has_shortcut && (
          <Dropdown
            placeholder="Select format"
            search
            selection
            options={shortcutOptions}
            required
          />
        )}
        <div className="ui action input">
          <input
            type="text"
            value={time}
            onChange={handleInputChange}
            name="time"
            placeholder="Enter time in format MM:SS:mmm"
            required
          />
          <button className="ui button" type="submit">
            Save time
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTime;
