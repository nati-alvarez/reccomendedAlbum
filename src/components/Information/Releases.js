import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {releaseInfoAction} from "../../Redux/Actions/ReleaseInfoAction";

function Releases() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  return data.releases.all ? (
    <div className="bioContainer #top">
      <div className="releasesContainer">
        {data.releases.all.map((asset) => (
          <div
            key={uuidv4()}
            className="releaseContainer"
            onClick={() => dispatch(releaseInfoAction(asset.id))}
          >
            <p>{asset.catno}</p>
            <img src={asset.thumb} alt={asset.title} />
            <p>{asset.artist}</p>
            <p>{asset.title}</p>
            <p>Released - {asset.year}</p>
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
