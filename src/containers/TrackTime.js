import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Icon, Message, Table } from 'semantic-ui-react';
import { getTracks, getTrackTimes } from '../utils';

const TrackTime = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const trackTimes = useSelector((state) => state.trackTimes.trackTimes);
  const tracks = useSelector((state) => state.allTracks.tracks);
  const [trackTime, setTrackTime] = useState('');
  const [shortcuts, setShortcuts] = useState([]);
  const [trackDeleted, setTrackDeleted] = useState(false);

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
    if(trackTime.deleted){
      setTrackDeleted(true);
    }
  }, [trackTime]);

  useEffect(() => {
    getTrackTimes(dispatch, null, id);
    getTracks(dispatch);
    getShortcuts();
  }, []);

  const getShortcuts = async () => {
    const response = await axios.get('http://localhost:3000/shortcuts').catch((err) => console.log(err));
    setShortcuts(response.data);
  };

  const deleteTime = async () => {
    await axios.patch(`http://localhost:3000/times/delete/${trackTime.track_time_id}`).catch((err) => console.log(err)).then((res) => {
      if(res.status === 200){
        setTrackDeleted(true);
      }
    });
  }

  const undoDelete = async () => {
    await axios.patch(`http://localhost:3000/times/undo/${trackTime.track_time_id}`).catch((err) => console.log(err)).then((res) => {
      if(res.status === 200){
        setTrackDeleted(false);
      }
    });
  }

  return (
    <>
      {!trackDeleted ? (
        <div data-cy='track-time-data'>
          <h1>{trackTime.track}</h1>
          <div className="ui list">
            <div className="item">Time: {trackTime.time}</div>
            <div className="item">Format: {trackTime.format === 'shortcut' ? 'Shortcut' : 'Non Shortcut'}</div>
          </div>
          {trackTime.breakdown?.length > 0 && (
            <div style={{ margin: '0 30%' }}>
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
                      <Table.Cell textAlign="center">
                        {lapBreakdown.shortcut_achieved ? (
                          <Icon color="green" name="checkmark" size="large" />
                        ) : (
                          <Icon color="red" name="cancel" size="large" />
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <div data-cy='delete-time-button'>
              <Button negative size="big" icon="trash" content="Delete Time" onClick={deleteTime} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div style={{margin: '0 30%'}} data-cy="track-deleted-message">
          <Message negative>
            <Message.Header>Track deleted</Message.Header>
            <p>If you deleted this by mistake then click 'Undo'</p>
            <div data-cy='undo-delete-button'>
            <Button primary size="big" icon="trash" content="Undo" onClick={undoDelete}/>
            </div>
          </Message>
        </div>
      )}
    </>
  );

};

export default TrackTime;
