import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

const LapShortcut = ({ shortcut, lapCount, updateLapShortcut }) => {
  const checkboxClicked = (e, data) => {
    updateLapShortcut(shortcut.shortcut_id, lapCount, data.checked);
  };

  return <Form.Field control={Checkbox} label={shortcut.name} onChange={checkboxClicked} />;
};

export default LapShortcut;
