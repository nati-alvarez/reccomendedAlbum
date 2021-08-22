import {useDispatch, useSelector} from "react-redux";
import {
  navSelectorDispatch,
  navVisibility,
} from "../../Redux/Actions/navSelectorAction";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRecordVinyl} from "@fortawesome/free-solid-svg-icons";

import {faMusic} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faDragon} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {loadReleasesSearch} from "../../Redux/Actions/ReleasesAction";
import {showBio} from "../../Redux/Actions/ReleaseInfoAction";

function Header() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userID");

  const searchHandler = () => {
    // if the reducer does not have all search data run the all data
    //fetcher, otherwise this will have been run when the user logged in.
    if (data.releases.search && data.releases.search.length > 0) {
      dispatch(navVisibility());
    } else {
      dispatch(loadReleasesSearch());
    }

    dispatch(showBio());
  };

  const loadData = () => {
    if (data.nav && data.nav.length > 0) {
      return;
    } else {
      dispatch(navSelectorDispatch("label"));
    }
  };

  return (
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
        {userId ? (
          <Link to={"/dashboard"}>
            <span onClick={() => dispatch(navVisibility())}>
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
