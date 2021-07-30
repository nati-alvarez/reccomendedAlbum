import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import { navVisibility } from "../../Redux/Actions/navSelectorDispatch"
import {assetSelector} from "../../Redux/Actions/assetSelector";
import {loadReleases} from "../../Redux/Actions/ReleasesAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
//THIS IS THE NAVIGATION COMPONENT THAT SITS ON THE LEFT HAND SIDE OF THE SCREEN. IT IS POPULATED
//BY DATA PULLED IN FROM THE API.

function SideNavLabels() {
  const dispatch = useDispatch();
  const navSelect = useSelector((state) => state.nav);

  const dispatchHandler = (id, type) => {
    
    dispatch(assetSelector(id, type));
    dispatch(loadReleases(id));
  };

  return navSelect.info ? (
    <div className={`navContainer ${navSelect.show ? "activeLibrary" : ""}`}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => {
          dispatch(navVisibility());
        }}
      ></FontAwesomeIcon>
      {navSelect.info.map((asset, i) => (
        <Link to={`/${asset.type}/${asset.name}`} key={`link ${asset.name}`}>
          <div
            key={i}
            className="navButtons"
            onClick={() => {
              // dispatchHandler(asset.id, asset.type);
              dispatchHandler(asset);
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
    <></>
  );

  // return labelData.navSelector.info[1] ? (
  //   <div className={`navContainer ${visible ? "activeLibrary" : ""}`}>
  //     {labelData.info.map((asset, i) => (
  //       <div key={i} className="navButtons">
  //         <img src={asset.image} alt={asset.name} key={`${i} label logo`} />
  //       </div>
  //     ))}
  //   </div>
  // ) : (
  //   <p>...LOADING</p>
  // );
}

export default SideNavLabels;
