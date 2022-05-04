import React from "react";
import TrackLinksList from "./TrackLinksList";

const TracksList = ({ tracks }) => {
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <TrackLinksList tracks={tracks} />
      </div>
    </div>
  );
};

export default TracksList;
