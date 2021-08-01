import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {navVisibility} from "../../Redux/Actions/navSelectorAction";
import {assetSelector} from "../../Redux/Actions/assetSelectorAction";
import {loadReleases} from "../../Redux/Actions/ReleasesAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import AddButton from "../../Common/AddButton";

//THIS IS THE NAVIGATION COMPONENT THAT SITS ON THE LEFT HAND SIDE OF THE SCREEN. IT IS POPULATED
//BY DATA PULLED IN FROM THE API OR THE USERS DB (IF THEY ARE SIGNED IN).

function SideNavLabels() {
  const dispatch = useDispatch();
  const navSelect = useSelector((state) => state.nav);

  const dispatchHandler = (id, asset, type) => {
    dispatch(assetSelector([asset]));
    dispatch(loadReleases(id, type));
  };

  return navSelect.all ? (
    <div className={`navContainer ${navSelect.show ? "activeLibrary" : ""}`}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => {
          dispatch(navVisibility());
        }}
      ></FontAwesomeIcon>
      <div className="addButton">
        <AddButton />
      </div>
      {navSelect.all.map((asset, i) => (
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
