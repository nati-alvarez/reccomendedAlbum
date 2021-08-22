import axios from "axios";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {showBio} from "../../Redux/Actions/ReleaseInfoAction";
import {topTenAction} from "../../Redux/Actions/userActions";
// import { topTenHandler } from "../../utils/utils";

function ReleaseInfo() {
  const [disabled, setDisabled] = useState({
    topTen: false,
    inLibrary: false,
    remove: false,
  });
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const releaseInfo = useSelector((state) => state.individualRelease);
  const userId = localStorage.getItem("userID");
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

  function topTenHandler(itemId) {
    axios
      // .patch("https://rlca-backend.herokuapp.com/user/", {
      .patch(`http://localhost:3001/user/${userId}`, {
        topTen: itemId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setDisabled.topTen(true);
    dispatch(topTenAction(itemId));
  }

  function inLibraryHandler(itemId) {
    axios
      // .patch("https://rlca-backend.herokuapp.com/user/", {
      .patch(`http://localhost:3001/user/${userId}`, {
        inLibrary: itemId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setDisabled({
      topTen: disabled.topTen,
      inLibrary: true,
      remove: disabled.remove,
    });
  }

  return (
    <div className="releaseInfoContainer">
      <img src={releaseInfo.img} alt={releaseInfo.title} />
      <h2>{releaseInfo.artists}</h2>
      <h2>{releaseInfo.title}</h2>
      <p>{releaseInfo.released}</p>
      <label className="inLibrary">
        <button
          onClick={() => inLibraryHandler(releaseInfo.id)}
          disabled={disabled.inLibrary}
        >
          Add to Library
        </button>
        <button disabled={disabled.remove}>Remove from Library</button>
      </label>
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
      <div className="releaseInfoButtonContainer">
        <button
          onClick={() => topTenHandler(releaseInfo.img)}
          disabled={disabled.topTen}
        >
          +Top Ten
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
