import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTrackTimes } from "../utils";

const TrackTime = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const trackTimes = useSelector((state) => state.trackTimes.trackTimes);

  const [trackTime, setTrackTime] = useState("");

  const getTrackTime = () => {
    if (trackTimes?.length > 0) {
      setTrackTime(() =>
        trackTimes
          ?.filter((trackTime) => trackTime.track_time_id === parseInt(id))
          .shift()
      );
    }
  };

  useEffect(() => {
    getTrackTime();
  }, [trackTimes]);

  useEffect(() => {
    getTrackTimes(dispatch);
  }, []);

  return (
    <>
      <h1>Hi there..{id}</h1>
      {trackTime ? <h1>{trackTime.time}</h1> : <h1>Unable to load data...</h1>}
    </>
  );
};

export default TrackTime;
