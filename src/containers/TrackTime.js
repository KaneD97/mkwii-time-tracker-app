import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTracks, getTrackTimes } from "../utils";

const TrackTime = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const trackTimes = useSelector((state) => state.trackTimes.trackTimes);
  const tracks = useSelector((state) => state.allTracks.tracks);
  const [trackTime, setTrackTime] = useState("");

  const getTrackTime = () => {
    if (trackTimes?.length > 0) {
      setTrackTime(() => {
        const time = trackTimes
          ?.filter((trackTime) => trackTime.track_time_id === parseInt(id))
          .shift();
        const track = tracks
          .filter((track) => track.id === time?.track_id)
          .shift();
        if (time && track) {
          return { ...time, track: track?.name };
        } else {
          return "";
        }
      });
    }
  };

  const trackTimeData = () => {
    return (
      <>
        <h1>{trackTime.track}</h1>
        <h1>{trackTime.time}</h1>
        {trackTime.breakdown?.length > 0 ? (
          <h2>Load shortcut</h2>
        ) : (
          <h2>Non-shortcut</h2>
        )}
      </>
    );
  };

  useEffect(() => {
    getTrackTime();
  }, [trackTimes, tracks]);

  useEffect(() => {
    getTrackTimes(dispatch);
    getTracks(dispatch);
  }, []);

  return (
    <>
      {trackTime !== "" ? (
        <h1>{trackTimeData()}</h1>
      ) : (
        <h1>Unable to load data...</h1>
      )}
    </>
  );
};

export default TrackTime;
