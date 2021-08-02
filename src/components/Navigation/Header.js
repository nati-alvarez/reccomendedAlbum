import React from "react";
import {useDispatch} from "react-redux";
import {
  navSelectorDispatch,
  navVisibility,
} from "../../Redux/Actions/navSelectorAction";
import {useAuth} from "../../Auth/AuthProvider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRecordVinyl} from "@fortawesome/free-solid-svg-icons";
// import {faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faDragon} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


function Header() {
  const {currentUser} = useAuth();
  const dispatch = useDispatch();

  return (
    <div className="headerContainer">
      <nav>
        <Link to={"/"}>
          <span onClick={() => dispatch(navSelectorDispatch("label"))}>
            <FontAwesomeIcon
              className="fai"
              icon={faRecordVinyl}
            ></FontAwesomeIcon>
            <p>Label</p>
          </span>
        </Link>
        {/* <span onClick={() => dispatch(navSelectorDispatch("artist"))}>
          <FontAwesomeIcon className="fai" icon={faUserAlt}></FontAwesomeIcon>
          <p>Artist</p>
        </span> */}
        <Link to={"/search"}>
          <span onClick={() =>  dispatch(navVisibility())}>
            <FontAwesomeIcon className="fai" icon={faMusic}></FontAwesomeIcon>
            <p>Search</p>
          </span>
        </Link>
        {currentUser ? (
          <Link to={"/dashboard"}>
          <span onClick={() =>  dispatch(navVisibility())}>
              <FontAwesomeIcon
                className="fai"
                icon={faDragon}
              ></FontAwesomeIcon>
              <p>Dashboard</p>
            </span>
          </Link>
        ) : (
          <Link to={"/login"}>
            <span>
              <FontAwesomeIcon
                className="fai"
                icon={faDoorOpen}
              ></FontAwesomeIcon>
              <p>Sign In</p>
            </span>
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Header;
