import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//const track = require("../data/images/track.png");
const TrackComponent = () => {
  const tracks = useSelector((state) => state.allTracks.tracks);
  const renderedTracks = tracks.map((track) => {
    const { name, id } = track;

    return (
      <div className="card">
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
  console.log(renderedTracks);
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <>{renderedTracks}</>
      </div>
    </div>
  );
};

export default TrackComponent;
