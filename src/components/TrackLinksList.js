import React from "react";

const { Link } = require("react-router-dom");

const TrackLinksList = ({ tracks }) => {
  return tracks?.map((track) => {
    const { name, id } = track;
    return (
      <div className="card" key={id}>
        <Link to={`/track/${id}`}>
          <div className="image">
            <img src={require(`../data/images/track_${id}.png`)} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
        </Link>
      </div>
    );
  });
};

export default TrackLinksList;
