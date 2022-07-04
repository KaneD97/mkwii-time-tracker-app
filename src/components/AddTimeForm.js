import { Button, Form, Input, Select } from 'semantic-ui-react';
import ShortcutBreakdown from '../containers/ShortcutBreakdown';

const AddTimeForm = ({ tracks, track, time, format, handleFormat, handleTrackChange, handleSubmit, handleInputChange }) => {
  const shortcutOptions = [
    { key: 0, value: 'Shortcut', text: 'Shortcut' },
    { key: 1, value: 'Non shortcut', text: 'Non shortcut' },
  ];

  return (
    <div style={{ padding: 10 }}>
      <Form size="small" key="small" onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field control={Select} label="Track" options={tracks} placeholder="Select track" onChange={handleTrackChange} />
          {track.has_shortcut && <Form.Field control={Select} label="Format" options={shortcutOptions} placeholder="Select format" onChange={handleFormat} />}
          <Form.Field control={Input} label="Time" value={time} onChange={handleInputChange} placeholder="Enter time in format MM:SS.mmm" />
        </Form.Group>
        {format === 'shortcut' && <ShortcutBreakdown trackId={track.key} />}
        <div data-cy="submit-button" style={{ padding: 10 }}>
          <Button positive size="medium" content="Submit" />
        </div>
      </Form>
    </div>
  );
};

export default AddTimeForm;
