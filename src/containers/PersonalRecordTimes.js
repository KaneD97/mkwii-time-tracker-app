import React, { useEffect } from "react";
import Tracks from "./Tracks";
import { useDispatch } from "react-redux";
import { getTracks } from "../utils";

const PersonalRecordTimes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTracks(dispatch);
  }, []);

  return (
    <div>
      <h1>World Record Times!</h1>
      <Tracks></Tracks>
    </div>
  );
};

export default PersonalRecordTimes;
