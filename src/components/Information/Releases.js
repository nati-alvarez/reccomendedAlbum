import {useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";

function Releases(props) {
  const data = useSelector((state) => state);
  return data.releases.all ? (
    <div className="bioContainer #top">
      <div className="releasesContainer">
        {data.releases.all.map((asset) => (
          <div key={uuidv4()} className="releaseContainer">
            <p>{asset.catno}</p>
            <img src={asset.thumb} alt={asset.title} key={uuidv4()} />
            <p key={uuidv4()}>{asset.artist}</p>
            <p key={uuidv4()}>{asset.title}</p>
            <p key={uuidv4()}>Released - {asset.year}</p>
          </div>
        ))}
      </div>
      <div className="footerContainer">
        {/* className={`navContainer ${navSelect.show ? "activeLibrary" : ""}`} */}
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
