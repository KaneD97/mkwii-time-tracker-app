import { useState } from "react";
import { Button, Form, Input, Select } from "semantic-ui-react";
import { getDateTimeToday } from "../utils";
import ShortcutBreakdown from "../containers/ShortcutBreakdown";

const AddTimeForm = ({ tracks, handleTrackChange, track }) => {
  const [time, setTime] = useState("");
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
      const formData = {
        time,
        name: track.value,
        id: track.key,
        dateAchieved,
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

  return (
    <Form size="small" key="small" onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Field
          control={Select}
          label="Track"
          options={tracks}
          placeholder="Select track"
          onChange={handleTrackChange}
        />
        {track.has_shortcut && (
          <Form.Field
            control={Select}
            label="Format"
            options={shortcutOptions}
            placeholder="Select format"
          />
        )}
        <Form.Field
          control={Input}
          label="Time"
          value={time}
          onChange={handleInputChange}
          placeholder="Enter time in format MM:SS:mmm"
        />
      </Form.Group>
      <Form.Field control={Button} content="Submit" />
      <ShortcutBreakdown trackId={track.key} />
    </Form>
  );
};

export default AddTimeForm;
