//Hooks
import {useSelector, useDispatch} from "react-redux";

//Components
import AddButton from "../Common/AddButton";

//React Router
import {Link} from "react-router-dom";

// Redux
import {navVisibility} from "../../Redux/Actions/LabelsAction";
import {loadReleases} from "../../Redux/Actions/ReleasesAction";

//Font Awesum Icon Library Imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

//THIS IS THE NAVIGATION COMPONENT THAT SITS ON THE LEFT HAND SIDE OF THE SCREEN. IT IS POPULATED
//BY DATA PULLED IN FROM THE API OR THE USERS DB (IF THEY ARE SIGNED IN).

function SideNavLabels() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Label);
  const releases = useSelector((state) => state.Releases);

  const dispatchHandler = (id) => {
    if (releases.all.length > 0) {
      dispatch(navVisibility());
    } else {
      dispatch(loadReleases(id));
      dispatch(navVisibility());
    }
  };
  return data.all.length > 0 ? (
    <div className={`navContainer ${data.show ? "activeLibrary" : ""}`}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => {
          dispatch(navVisibility());
        }}
      ></FontAwesomeIcon>
      <div className="addButton">
        <AddButton />
      </div>
      {data.all.map((asset, i) => (
        <Link to={`/label/${asset.name}`} key={`link ${asset.name}`}>
          <div
            key={i}
            className="navButtons"
            onClick={() => {
              dispatchHandler(asset.id);
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
}

export default SideNavLabels;
