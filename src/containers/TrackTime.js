import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Icon, Table } from 'semantic-ui-react';
import { getTracks, getTrackTimes } from '../utils';

const TrackTime = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const trackTimes = useSelector((state) => state.trackTimes.trackTimes);
  const tracks = useSelector((state) => state.allTracks.tracks);
  const [trackTime, setTrackTime] = useState('');
  const [shortcuts, setShortcuts] = useState([]);

  const getTrackTime = () => {
    if (trackTimes?.length > 0) {
      setTrackTime(() => {
        const time = trackTimes?.filter((trackTime) => trackTime.track_time_id === id).shift();
        const track = tracks.filter((track) => track.id === parseInt(time?.track_id)).shift();
        if (time && track) {
          return { ...time, track: track?.name };
        } else {
          return '';
        }
      });
    }
  };

  useEffect(() => {
    getTrackTime();
  }, [trackTimes, tracks]);

  useEffect(() => {
    getTrackTimes(dispatch, null, id);
    getTracks(dispatch);
    getShortcuts();
  }, []);

  const getShortcuts = async () => {
    const response = await axios.get('http://localhost:3000/shortcuts').catch((err) => console.log(err));
    setShortcuts(response.data);
  };

  return (
    <>
      <h1>{trackTime.track}</h1>
      <h1>{trackTime.time}</h1>
      <h1>Format: {trackTime.format === 'shortcut' ? 'Shortcut' : 'Non Shortcut'}</h1>
      {trackTime.breakdown?.length > 0 && (
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan="2">Shortcut</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Lap</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Shortcut achieved</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {trackTime.breakdown?.map((lapBreakdown) => (
              <Table.Row>
                <Table.Cell>{shortcuts.filter((shortcut) => shortcut.shortcut_id === parseInt(lapBreakdown.shortcut_id)).shift()?.name}</Table.Cell>
                <Table.Cell>{lapBreakdown.lap_count}</Table.Cell>
                <Table.Cell textAlign="center">{lapBreakdown.shortcut_achieved && <Icon color="green" name="checkmark" size="large" />}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  );
};

export default TrackTime;
