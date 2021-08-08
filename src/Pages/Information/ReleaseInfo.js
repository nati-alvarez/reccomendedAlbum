import axios from "axios";
import {useSelector, useDispatch} from "react-redux";

import {showBio} from "../../Redux/Actions/ReleaseInfoAction";

function ReleaseInfo() {

  const dispatch = useDispatch();
  const releaseInfo = useSelector((state) => state.individualRelease);
  //This function converts the returned youtube 'watch' uris into youtube 'embed' uris
  // which is neccessary to host them.
  function youtube_parser(url) {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }
  const videoLinks = [];
  if (releaseInfo.videos) {
    releaseInfo.videos.forEach((url) => {
      videoLinks.push(youtube_parser(url.uri));
    });
  }
  console.log(releaseInfo.img)
  const topTenHandler = async (releaseInfo) => {
    await axios.patch('http://localhost:3001/user/610f0899fbc8aa0d170023eb', {topTen: releaseInfo.img})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
            key={i}
            title={i}
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${video}`}
            frameBorder="0"
          ></iframe>
        ))}
      </div>
      <div className='releaseInfoButtonContainer'>
      <button
        onClick={() => {
          topTenHandler(releaseInfo)
        }}
      >
        Top Ten
      </button>
      <button
        onClick={() => {
          dispatch(showBio());
        }}
      >
        Back
      </button>
      </div>
      
    </div>
  );
}

export default ReleaseInfo;
