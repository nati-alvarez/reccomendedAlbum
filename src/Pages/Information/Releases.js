import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {releaseInfoAction} from "../../Redux/Actions/ReleaseInfoAction";
import LoadingImage from '../../assets/loading.jpeg'
function Releases() {
  const [loadAmmount, setLoadAmmount] = useState(20);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  return data.releases.all ? (
    <div className="bioContainer #top">
      <div className="releasesContainer">
        {data.releases.all.slice(0, loadAmmount).map((asset) => (
          <div
            key={uuidv4()}
            className="releaseContainer"
            onClick={() => dispatch(releaseInfoAction(asset.id))}
          >
            <img src={asset.thumb} alt={asset.title} />
            <p>{asset.catno}</p>
            <p>{asset.artist}</p>
            <p>{asset.title}</p>
            <p>Released - {asset.year}</p>
          </div>
        ))}
      </div>
      <div className="footerContainer">
        <div className={`${data.releases.all ? "loadMore" : "hideTop"}`}>
          <button onClick={() => setLoadAmmount((prev) => prev + 20)}>
            <p>Load More Titles</p>
          </button>
          <button>
            <a href="#top">Top</a>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className='loadingContainer'>
     
    <img src={LoadingImage} alt='loading'/>     
        </div>
  );
}

export default Releases;
