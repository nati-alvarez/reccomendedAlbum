import {useSelector, useDispatch} from "react-redux";
import { showBio } from "../../Redux/Actions/ReleaseInfoAction";

function ReleaseInfo() {
  const dispatch = useDispatch()
  const releaseInfo = useSelector((state) => state.individualRelease);

  return (
    <div className="releaseInfoContainer">
      <img src={releaseInfo.img} alt={releaseInfo.title} />
      <h2>{releaseInfo.artists}</h2>
      <h2>{releaseInfo.title}</h2>
      <p>{releaseInfo.released}</p>
      <span>
        {releaseInfo.tracklist.map((track, i) => (
          <span key={i} className="tracklistSpan">
            <p className="position">{track.position}</p>
            <p className="title">{track.title}</p>
          </span>
        ))}
      </span>
      {/* <div className="videoPlayer">
        {releaseInfo.videos.map((video, i) => (
          <iframe
            title={i}
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=${video.uri}`}
            frameBorder="0"
          ></iframe>
        ))}
      </div> */}
      <button onClick={() => {dispatch(showBio())}}>Back</button>
    </div>
  );
}

export default ReleaseInfo;
