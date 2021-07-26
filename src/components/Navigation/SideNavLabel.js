import React from "react";
import {useSelector} from "react-redux";

//THIS IS THE NAVIGATION COMPONENT THAT SITS ON THE LEFT HAND SIDE OF THE SCREEN. IT IS POPULATED
//BY DATA PULLED IN FROM THE API.

function SideNavLabels({navState}) {
  const labelData = useSelector((state) => state.label);
  return labelData.info[1] ? (
    <div className='navContainer'>
      {labelData.info.map((asset, i) => (
        <div key={i} className="navButtons">
          <img src={asset.image} alt={asset.name} key={`${i} label logo`} />
        </div>
      ))}
    </div>
  ) : (
    <p>...LOADING</p>
  );
}

export default SideNavLabels;
