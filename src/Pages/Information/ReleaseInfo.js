import axios from "axios";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {showBio} from "../../Redux/Actions/ReleaseInfoAction";
import {getUserInfo, topTenAction} from "../../Redux/Actions/userActions";
// import { topTenHandler } from "../../utils/utils";

function ReleaseInfo() {
  const [topTenDisabled, setTopTenDisabled] = useState(false);
  const [inLibraryDisabled, setInLibraryDisabled] = useState(false);
  const [removeDisabled, setremoveDisabled] = useState(false);

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
      .patch(`https://rlca-backend.herokuapp.com/user/${userId}`, {
        topTen: itemId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTopTenDisabled(true);
    dispatch(topTenAction(itemId));
    dispatch(getUserInfo());
  }

  function inLibraryHandler(itemId, add) {
    axios
      // .patch("https://rlca-backend.herokuapp.com/user/", {
      .patch(`https://rlca-backend.herokuapp.com/user/${userId}`, {
        inLibrary: itemId,
        add: add,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    if (add === true) {
      setInLibraryDisabled(true);
    } else {
      setremoveDisabled(true);
    }
  }

  return (
    <div className="releaseInfoContainer">
      <img src={releaseInfo.img} alt={releaseInfo.title} />
      <h2>{releaseInfo.artists}</h2>
      <h2>{releaseInfo.title}</h2>
      <p>{releaseInfo.released}</p>
      <label className="inLibrary">
        <button
          onClick={(() => inLibraryHandler(releaseInfo.id, true))}
          disabled={inLibraryDisabled}
        >
          Add to Library
        </button>
        <button
          disabled={removeDisabled}
          onClick={() => inLibraryHandler(releaseInfo.img, false)}
        >
          Remove from Library
        </button>
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
          onClick={() => topTenHandler(releaseInfo.img, true)}
          disabled={topTenDisabled}
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
