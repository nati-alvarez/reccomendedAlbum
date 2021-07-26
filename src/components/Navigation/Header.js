import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRecordVinyl} from "@fortawesome/free-solid-svg-icons";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";

function Header({navState, setNavState}) {
  return (
    <div className="headerContainer">
      <nav>
        <span onClick={() => setNavState(!navState.label)}>
          <FontAwesomeIcon icon={faRecordVinyl}></FontAwesomeIcon>
          <p>Label</p>
        </span>
        <span>
          <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
          <p>Artist</p>
        </span>
        <span>
          <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
          <p>Genre</p>
        </span>
        <span>
          <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon>
          <p>Sign In</p>
        </span>
      </nav>
    </div>
  );
}

export default Header;
