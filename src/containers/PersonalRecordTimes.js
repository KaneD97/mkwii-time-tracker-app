import React, { useEffect } from "react";
import Tracks from "./Tracks";
import { useDispatch } from "react-redux";
import { getTracks, getTrackTimes } from "../utils";
import { Button } from "semantic-ui-react";
import fileDownload from "js-file-download";

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
      <h1>World Record Times!</h1>
      <div data-cy="download-csv-button" style={divStyle}>
        <Button primary onClick={downloadCsv}>
          Download all times!
        </Button>
      </div>
      <Tracks></Tracks>
    </div>
  );
};

export default PersonalRecordTimes;
