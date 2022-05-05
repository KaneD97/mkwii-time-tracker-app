import axios from "axios";
import { useEffect, useState } from "react";
import LapBreakdown from "../components/LapBreakdown";

const ShortcutBreakdown = ({ trackId }) => {
  const [shortcuts, setShortcuts] = useState([]);
  const [filteredShortcuts, setFilteredShortcuts] = useState([]);

  const laps = [1, 2, 3];

  useEffect(() => {
    getShortcuts();
  }, []);

  useEffect(() => {
    setFilteredShortcuts(
      shortcuts.filter((shortcut) => shortcut.track_id === trackId)
    );
  }, [trackId]);

  const getShortcuts = async () => {
    const response = await axios
      .get("http://127.0.0.1:5500/mock_data/shortcuts.json")
      .catch((err) => console.log(err));
    setShortcuts(response.data);
  };

  return (
    <>
      <h1>Shortcut breakdown for {trackId}</h1>
      {laps.map((lap) => (
        <LapBreakdown shortcuts={filteredShortcuts} lapCount={lap} />
      ))}
    </>
  );
};

export default ShortcutBreakdown;
