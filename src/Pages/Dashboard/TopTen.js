import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadReleasesSearch} from "../../Redux/Actions/ReleasesAction";
import {getUserInfo} from "../../Redux/Actions/userActions";

function TopTen(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [topTenData, setTopTenData] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  useEffect(() => {
    dispatch(getUserInfo());
    setTopTenData(data?.user?.all[0]?.topTen);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setTopTenData(data?.user?.all[0]?.topTen);
    // eslint-disable-next-line
  }, [data?.user?.all[0]?.topTen]);
  const searchHandler = () => {
    // if the reducer does not have all search data run the all data
    //fetcher, otherwise this will have been run when the user logged in.
    if (data.releases.search && data.releases.search.length > 0) {
      window.location = "http://localhost:3000/search";
    } else {
      dispatch(loadReleasesSearch());
    }
    window.location = "http://localhost:3000/search";
  };

  return (
    <div className="topTenContainer">
      <div>
        <h4>Top Ten</h4>
      </div>
      <div className="topTenImage">
        {topTenData?.map((data, i) => (
          <div className="topTenImageHolder" key={i}>
            <img src={data} alt={i} />
            <p>{i + 1}</p>
          </div>
        ))}
        <div className="navButtonsPlus" onClick={searchHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
}

export default TopTen;
