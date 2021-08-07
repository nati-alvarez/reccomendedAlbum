

import Releases from "./Releases";
import Bio from "./Bio";
import ReleaseInfo from "./ReleaseInfo";
import { useSelector } from "react-redux";


function Index(props) {
  const dataChecker = useSelector((state) => state.Releases);
  return dataChecker.show ? (
    <div>
      <ReleaseInfo/>
    </div>
  ) : (
    <div>
      <Bio />
      <Releases />
    </div>
  );
}

export default Index;