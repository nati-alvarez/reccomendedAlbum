import {useSelector, useDispatch} from "react-redux";
import {showBio} from "../../Redux/Actions/ReleaseInfoAction";

function ReleaseInfo() {
  const dispatch = useDispatch();
  const releaseInfo = useSelector((state) => state.individualRelease);
  function youtube_parser(url) {
    var regExp = 
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  const videoLinks = [];
  releaseInfo.videos.map((url) => {
    console.log(url.uri)
    videoLinks.push(youtube_parser(url.uri));
  });

  console.log(videoLinks)
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
      <div className="videoPlayer">
        {videoLinks.map((video, i) => (
          <iframe
            title={i}
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${video}`}
            frameBorder="0"
          ></iframe>
        ))}
      </div>
      <button
        onClick={() => {
          dispatch(showBio());
        }}
      >
        Back
      </button>
    </div>
  );
}

export default ReleaseInfo;
