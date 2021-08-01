import React from "react";
import {useDispatch, useSelector} from "react-redux";

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
  const data = useSelector((state) => state.nav);

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
        <Link to={currentUser ? "/dashboard" : "/login"}>
          <span onClick={() => dispatch(navVisibility())}>
            <FontAwesomeIcon className="fai" icon={faMusic}></FontAwesomeIcon>
            <p>Dashboard</p>
          </span>
        </Link>
        {data.signToggle ? (
          <span>
            <Link to={"/dashboard"}>
              <FontAwesomeIcon
                className="fai"
                icon={faDragon}
              ></FontAwesomeIcon>
              <p>Welcome back</p>
            </Link>
          </span>
        ) : (
          <span>
            <Link to={"/login"}>
              <FontAwesomeIcon
                className="fai"
                icon={faDoorOpen}
              ></FontAwesomeIcon>
              <p>Sign In</p>
            </Link>
          </span>
        )}
      </nav>
    </div>
  );
}

export default Header;
