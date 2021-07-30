import React from "react";
import {useDispatch} from "react-redux";

import { navSelectorDispatch } from '../../Redux/Actions/navSelectorDispatch'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRecordVinyl} from "@fortawesome/free-solid-svg-icons";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";


function Header() {
  const dispatch = useDispatch();
  return (
    <div className="headerContainer">
      <nav>
        <span onClick={() => dispatch(navSelectorDispatch("labels"))}>
          <FontAwesomeIcon className='fai' icon={faRecordVinyl}></FontAwesomeIcon>
          <p>Label</p>
        </span>
        <span onClick={() => dispatch(navSelectorDispatch("artists"))}>
          <FontAwesomeIcon className='fai' icon={faUserAlt}></FontAwesomeIcon>
          <p>Artist</p>
        </span>
        <span onClick={() => dispatch(navSelectorDispatch("genre"))}>
          <FontAwesomeIcon className='fai' icon={faMusic}></FontAwesomeIcon>
          <p>Genre</p>
        </span>
        <span>
          <FontAwesomeIcon className='fai' icon={faDoorOpen}></FontAwesomeIcon>
          <p>Sign In</p>
        </span>
      </nav>
    </div>
  );
}

export default Header;
