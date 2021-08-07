import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {releaseInfoAction} from "../../Redux/Actions/ReleasesAction";

function Releases() {
  //handles local pagination
  const [loadAmmount, setLoadAmmount] = useState(20);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const loadData = (id) => {
    // This check is performed on most pages, it checks whether the reducer has relevant information in it
    // prior to an API request being made. If the data already exists then the information is pulled from the reducer
    // this eliminates unneccessary API requests.
    if (data.Releases.selectedRelease.id === id) {

      return;
    } else {

      dispatch(releaseInfoAction(id));
    }
  };

  return data.Releases.all ? (
    <div className="bioContainer #top">
      <div className="releasesContainer">
        {data.Releases.all.slice(0, loadAmmount).map((asset) => (
          <div
            key={uuidv4()}
            className="releaseContainer"
            onClick={() => loadData(asset.id)}
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
        <div className={`${data.Releases.all ? "loadMore" : "hideTop"}`}>
          <button onClick={() => setLoadAmmount((prev) => prev + 20)}>
            <p>Load More Titles</p>
          </button>
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
