import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {assetSelector} from "../../Redux/Actions/assetSelector";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
//THIS IS THE NAVIGATION COMPONENT THAT SITS ON THE LEFT HAND SIDE OF THE SCREEN. IT IS POPULATED
//BY DATA PULLED IN FROM THE API.

function SideNavLabels() {
  const dispatch = useDispatch();
  const navSelect = useSelector((state) => state.nav);

  return navSelect.info ? (
    <div className={`navContainer ${navSelect.show ? "activeLibrary" : ""}`}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => {
          dispatch(assetSelector());
        }}
      ></FontAwesomeIcon>
      {navSelect.info.map((asset, i) => (
        <div
          key={i}
          className="navButtons"
          onClick={() => {
            dispatch(assetSelector());
          }}
        >
          <img src={asset.image} alt={asset.name} key={`nav item ${i} image`} />
          <p key={`nav item ${i} name`}>{asset.name}</p>
        </div>
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
