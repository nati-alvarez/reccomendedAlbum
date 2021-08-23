import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {navVisibility} from "../../Redux/Actions/navSelectorAction";
import {assetSelector} from "../../Redux/Actions/assetSelectorAction";
import {
  loadReleases,
  loadReleasesSearch,
} from "../../Redux/Actions/ReleasesAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faPlus} from "@fortawesome/free-solid-svg-icons";
import LoadingImage from "../../assets/loading.jpeg";
import {useHistory} from "react-router-dom";
//THIS IS THE NAVIGATION COMPONENT THAT SITS ON THE LEFT HAND SIDE OF THE SCREEN. IT IS POPULATED
//BY DATA PULLED IN FROM THE API OR THE USERS DB (IF THEY ARE SIGNED IN).

function SideNavLabels() {
  const dispatch = useDispatch();
  let history = useHistory();
  const data = useSelector((state) => state);
  const userId = localStorage.getItem("userID");
  const dispatchHandler = (id, asset, type) => {
    dispatch(assetSelector([asset]));
    dispatch(loadReleases(id, type));
  };

  const searchHandler = () => {
    // if the reducer does not have all search data run the all data
    //fetcher, otherwise this will have been run when the user logged in.
    if (userId) {
      console.log("hit");
      if (data.releases.search.length > 0) {
        history.push("/searchLabels");
        dispatch(navVisibility());
      } else {
        dispatch(loadReleasesSearch());
        dispatch(navVisibility());
        history.push("/searchLabels");
      }
    } else {
      if (data.releases.search.length > 0) {
        history.push("/search");
        dispatch(navVisibility());
      } else {
        dispatch(loadReleasesSearch());
        dispatch(navVisibility());
        history.push("/search");
      }
    }
  };

  return userId ? (
    <div className={`navContainer ${data.nav.show ? "activeLibrary" : ""}`}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => {
          dispatch(navVisibility());
        }}
      ></FontAwesomeIcon>
      <div className="navButtonsPlusLabels navButtons" onClick={searchHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      {/* TODO LOOP OVER USERS LABELS FROM DB INSTEAD OF REDUCER LABELS*/}

      {data.nav.labels?.map((asset, i) => (
        <Link to={`/${asset.type}/${asset.name}`} key={`link ${asset.name}`}>
          <div
            key={i}
            className="navButtons"
            onClick={() => {
              dispatchHandler(asset.id, asset, asset.type);
            }}
          >
            <img
              src={asset.image}
              alt={asset.name}
              key={`nav item ${i} image`}
            />
            <p key={`nav item ${i} name`}>{asset.name}</p>
          </div>
        </Link>
      ))}
    </div>
  ) : data.nav.all ? (
    <div className={`navContainer ${data.nav.show ? "activeLibrary" : ""}`}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => {
          dispatch(navVisibility());
        }}
      ></FontAwesomeIcon>

      {data.nav.all.map((asset, i) => (
        <Link to={`/${asset.type}/${asset.name}`} key={`link ${asset.name}`}>
          <div
            key={i}
            className="navButtons"
            onClick={() => {
              dispatchHandler(asset.id, asset, asset.type);
            }}
          >
            <img
              src={asset.image}
              alt={asset.name}
              key={`nav item ${i} image`}
            />
            <p key={`nav item ${i} name`}>{asset.name}</p>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <div className="loadingContainer">
      <img src={LoadingImage} alt="loading" />
    </div>
  );
}

export default SideNavLabels;
