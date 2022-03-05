import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { setTracks } from "../redux/actions/track-actions";
import data from "../data/tracks.json";

const AddTime = () => {
  const [time, setTime] = useState("");
  const tracks = useSelector((state) => state.allTracks.tracks).map(
    (track) => ({ key: track.id, value: track.name, text: track.name })
  );

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const getTracks = () => {
    dispatch(setTracks(data));
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
        />
        <div className="ui action input">
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time in format MM:SS:mmm"
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
