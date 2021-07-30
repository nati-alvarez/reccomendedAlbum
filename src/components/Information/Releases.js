import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {releaseInfoAction} from "../../Redux/Actions/ReleaseInfoAction";
import ReleaseInfo from "./ReleaseInfo";

function Releases() {
  const [showInfo, setShowInfo] = useState(false)
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

const releaseInfoVisibility = (id) => {
  dispatch(releaseInfoAction(id))
  setShowInfo(true)
}

  return data.releases.all ? (
    <div className="bioContainer #top">
      <div className="releasesContainer">
        {data.releases.all.map((asset) => (
          <div
            key={uuidv4()}
            className="releaseContainer"
            onClick={() => releaseInfoVisibility(asset.id)}
          >
            <ReleaseInfo show={showInfo}/>
            <p>{asset.catno}</p>
            <img src={asset.thumb} alt={asset.title} key={uuidv4()} />
            <p key={uuidv4()}>{asset.artist}</p>
            <p key={uuidv4()}>{asset.title}</p>
            <p key={uuidv4()}>Released - {asset.year}</p>
          </div>
        ))}
      </div>
      <div className="footerContainer">
        <div className={`${data.releases.all ? "" : "hideTop"}`}>
          <button>
            <a href="#top">TOP</a>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Releases;
