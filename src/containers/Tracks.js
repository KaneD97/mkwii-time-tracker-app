import { useSelector } from "react-redux";
import TracksList from "../components/TracksList";
const Tracks = () => {
  const tracks = useSelector((state) => state.allTracks.tracks);
  return <TracksList tracks={tracks} />;
};

export default Tracks;
