import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const AddTime = () => {
  const [tracks] = useState([{ key: "Lol", value: "hehe", text: "Mushroomz" }]);
  const [time, setTime] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
