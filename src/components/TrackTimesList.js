const TrackTimesList = ({ track }) => {
  return (
    <div>
      {Object.keys(track).length === 0 ? (
        <h1>Loading track times</h1>
      ) : (
        <h1>{track.name}</h1>
      )}
    </div>
  );
};

export default TrackTimesList;
