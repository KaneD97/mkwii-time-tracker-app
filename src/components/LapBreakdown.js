const LapBreakdown = ({ shortcuts, lapCount }) => {
  return (
    <>
      <h2>Lap {lapCount}</h2>
      {shortcuts.map((shortcut) => (
        <p>{shortcut.name}</p>
      ))}
    </>
  );
};

export default LapBreakdown;
