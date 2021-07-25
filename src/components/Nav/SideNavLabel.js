import React from "react";
import {label} from "../../API/APIcall";
import Label from "./Label";

function SideNavLabels(props) {
  const data = label(90336);
  console.log(data);
  return (
    <div className="library">
      <h2>Menu</h2>
      <div className="menuItem">
        <Label />

        {/* <a>Denovali</a>
        <a>Erased Tapes</a>
        <a>Cryo Chamber</a>
        <a>Sonic Pieces</a>
        <a>Miasmah</a>
        <a>Ki</a> */}
      </div>
    </div>
  );
}

export default SideNavLabels;
