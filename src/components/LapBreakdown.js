import { Form } from "semantic-ui-react";
import LapShortcut from "./LapShortcut";

const LapBreakdown = ({ shortcuts, lapCount, updateLapShortcut }) => {
  return (
    <Form.Group grouped>
      <h2>Lap {lapCount}</h2>
      {shortcuts.map((shortcut) => (
        <LapShortcut
          shortcut={shortcut}
          lapCount={lapCount}
          updateLapShortcut={updateLapShortcut}
        />
      ))}
    </Form.Group>
  );
};

export default LapBreakdown;
