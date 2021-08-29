import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { navSelectorUserDispatch } from "../../Redux/Actions/navSelectorAction";

function LatestReleases(props) {
  const data = useSelector((state) => state);
  const dispatch = useDispatch()
  const [latest, setLatest] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {
    dispatch(navSelectorUserDispatch(data.user.all[0].labels))
    setLatest([1, 2, 3, 4, 5]);
  }, []);

  return (
    <div className="latestRelContainer">
      <div>
        <h4>Latest Releases</h4>
        <p>From the labels you follow</p>
      </div>
      <div className="labelLatestContainer">
       
      </div>
    </div>
  );
}

export default LatestReleases;
