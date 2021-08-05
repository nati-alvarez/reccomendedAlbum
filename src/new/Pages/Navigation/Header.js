import React from "react";

//HOOKS
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
//Utils

//React Router
import {Link} from "react-router-dom";

//Font Awesum Icon Library Imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRecordVinyl} from "@fortawesome/free-solid-svg-icons";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
// import {faDragon} from "@fortawesome/free-solid-svg-icons";
import {labelAction, navVisibility} from "../../Redux/Actions/LabelsAction";

function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  // the following two functions handle checking if data exists in the reducer already
  // and if the user is signed in or not.

  const loadData = () => {
    //This check is performed on most pages, it checks whether the reducer has relevant information in it
    // prior to an API request being made. If the data already exists then the information is pulled from the reducer
    // this eliminates unneccessary API requests.
    if (data.Label.all.length > 0) {
      dispatch(navVisibility());
    } else {
      dispatch(labelAction());
    }
  };

  const searchHandler = () => {
    // if the user is not signed in run the all data
    //fetcher, otherwise this will have been run when the user logged in.
    // if (!currentUser) {
    //   dispatch(loadReleasesSearch());
    // }
    // dispatch(navVisibility());
  };

  return (
    <div>
      <div className="headerContainer">
        <nav>
          <Link to={"/"}>
            <span onClick={loadData}>
              <FontAwesomeIcon
                className="fai"
                icon={faRecordVinyl}
              ></FontAwesomeIcon>
              <p>Label</p>
            </span>
          </Link>
          <Link to={"/search"}>
            <span onClick={searchHandler}>
              <FontAwesomeIcon className="fai" icon={faMusic}></FontAwesomeIcon>
              <p>Search</p>
            </span>
          </Link>
          {/* TODO Once the backend and auth is built unccoment this out */}
          {/* {currentUser ? (
          <Link to={"/dashboard"}>
            <span onClick={() => dispatch(navVisibility())}>
              <FontAwesomeIcon
                className="fai"
                icon={faDragon}
              ></FontAwesomeIcon>
              <p>Dashboard</p>
            </span>
          </Link>
        ) : ( */}
          <Link to={"/login"}>
            <span>
              <FontAwesomeIcon
                className="fai"
                icon={faDoorOpen}
              ></FontAwesomeIcon>
              <p>Sign In</p>
            </span>
          </Link>
          {/* )} */}
        </nav>
      </div>
    </div>
  );
}

export default Header;
