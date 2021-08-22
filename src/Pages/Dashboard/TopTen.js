import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadReleasesSearch} from "../../Redux/Actions/ReleasesAction";

function TopTen(props) {
  const [topTenData, setTopTenData] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const data = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    // axios.get(`https://rlca-backend.herokuapp.com/user/${userId}`)
    const userId = localStorage.getItem("userID");

    axios
      .get(`http://localhost:3001/user/${userId}`)
      .then(function (response) {
        setTopTenData(response.data.topTen);
      })
      .catch(function (error) {
        console.log(error);
      });

    // eslint-disable-next-line
  }, []);

  const searchHandler = () => {
    // if the reducer does not have all search data run the all data
    //fetcher, otherwise this will have been run when the user logged in.
    if (data.releases.search && data.releases.search.length > 0) {
      return;
    } else {
      dispatch(loadReleasesSearch());
    }
  };

  return (
    <div className="topTenContainer">
      <div>
        <h4>Top Ten</h4>
      </div>
      <div className="topTenImage">
        {topTenData.map((data, i) => (
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
