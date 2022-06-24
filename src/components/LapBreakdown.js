import { Form } from 'semantic-ui-react';
import LapShortcut from './LapShortcut';

const LapBreakdown = ({ shortcuts, lapCount, updateLapShortcut }) => {
  const divStyle = { paddingTop: 5, paddingDown: 5 };
  return (
    <Form.Group grouped>
      <h3>Lap {lapCount}</h3>
      {shortcuts.map((shortcut) => (
        <div style={divStyle}>
          <LapShortcut shortcut={shortcut} lapCount={lapCount} updateLapShortcut={updateLapShortcut} />
        </div>
      ))}
    </Form.Group>
  );
};

export default LapBreakdown;
