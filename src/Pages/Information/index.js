import Releases from "./Releases";
import Bio from "./Bio";
import {useSelector} from "react-redux";
import ReleaseInfo from "./ReleaseInfo";

function Index(props) {
  const checker = useSelector((state) => state.individualRelease);
  console.log(checker[0].show);
  return checker.show ? (
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
