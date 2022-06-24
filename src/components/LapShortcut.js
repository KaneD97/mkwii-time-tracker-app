import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const LapShortcut = ({ shortcut, lapCount, updateLapShortcut }) => {
  const checkboxClicked = (e, data) => {
    updateLapShortcut(shortcut.shortcut_id, lapCount, data.checked);
  };

  return <Checkbox toggle label={shortcut.name} onChange={checkboxClicked} />;
};

export default LapShortcut;
