import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";

const TrackTimesList = ({ track, trackTimes }) => {
  const [filteredTrackTimes, setFilteredTrackTimes] = useState([]);

  const getFilteredTrackTimes = () => {
    if (trackTimes && track.id) {
      setFilteredTrackTimes(() =>
        trackTimes?.filter((trackTime) => parseInt(trackTime.track_id) === track.id)
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
          {filteredTrackTimes.length > 0 ? (
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                  <Table.HeaderCell>Format</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {filteredTrackTimes.map((trackTime) => (
                  <Table.Row>
                    <Table.Cell>
                      <Link to={`/time/${trackTime.track_time_id}`}>
                        {trackTime.time}
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      {trackTime.format === "shortcut"
                        ? "Shortcut"
                        : "Non Shortcut"}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          ) : (
            <p>No times recorded for this track</p>
          )}
        </>
      )}
    </div>
  );
};

export default TrackTimesList;
