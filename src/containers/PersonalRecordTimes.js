import React, { useEffect } from "react";
import Tracks from "./Tracks";
import { useDispatch } from "react-redux";
import { getTracks, getTrackTimes } from "../utils";
import { Button } from "semantic-ui-react";
import fileDownload from "js-file-download";
import { Link } from "react-router-dom";

const PersonalRecordTimes = () => {
  const dispatch = useDispatch();
  const timeHeaders = ["track_id", "time", "format", "date_achieved"];
  useEffect(() => {
    getTracks(dispatch);
  }, []);

  const downloadCsv = async () => {
    const response = await getTrackTimes(dispatch);
    const csvString = [
      timeHeaders,
      ...response.data.map((time) => [
        time.track_id,
        time.time,
        time.format,
        time.date_achieved,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");
    fileDownload(csvString, "personal_times.csv");
  };

  const divStyle = {
    marginBottom: 10,
  };

  return (
    <div>
      <h1>All Tracks</h1>
      <div style={divStyle}>
      <Link to={`/add`}>
        <Button positive size='big' icon='plus' content='Add Time'/>
        </Link>
      <Button primary onClick={downloadCsv} icon='download' size='big' content='Download times'/>
      </div>
      <Tracks></Tracks>
    </div>
  );
};

export default PersonalRecordTimes;
