import SideNavLabels from "./SideNavLabel";
import SideNavArtists from "./SideNavArtist";
import SideNavGenres from "./SideNavGenre";
import SideNavAdmins from "./SideNavAdmin";
import {useState} from "react";
import Header from "./Header";

function Navigator() {
  const [navState, setNavState] = useState({
    labels: false,
    artists: false,
    genres: false,
    admin: false,
  });
  return (
    <div>
        <Header navState={navState} setNavState={setNavState}/>
      <SideNavLabels navState={navState} />
      <SideNavArtists navState={navState} />
      <SideNavGenres navState={navState} />
      <SideNavAdmins navState={navState} />
    </div>
  );
}

export default Navigator;
