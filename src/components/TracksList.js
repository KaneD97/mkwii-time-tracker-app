import React from "react";
import TrackLinksList from "./TrackLinksList";

const TracksList = ({ tracks }) => {
  const divStyle = {
    paddingLeft: '2.5%',
    paddingRight: '2%'
  };
  return (
    <div className="four column wide">
      <div className="ui link cards" style={divStyle}>
        <TrackLinksList tracks={tracks} />
      </div>
    </div>
  );
};

export default TracksList;
