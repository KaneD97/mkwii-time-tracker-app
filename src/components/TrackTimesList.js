import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrackTimesList = ({ track, trackTimes }) => {
  const [filteredTrackTimes, setFilteredTrackTimes] = useState([]);

  const getFilteredTrackTimes = () => {
    if (trackTimes && track.id) {
      setFilteredTrackTimes(() =>
        trackTimes?.filter((trackTime) => trackTime.track_id === track.id)
      );
    }
  };

  useEffect(() => {
    getFilteredTrackTimes();
  }, [track, trackTimes]);

  return (
    <div>
      {Object.keys(track).length === 0 ? (
        <h1>Loading track times</h1>
      ) : (
        <>
          <h1>{track.name}</h1>
          {filteredTrackTimes.map((trackTime) => (
            <p>{trackTime.time}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default TrackTimesList;
