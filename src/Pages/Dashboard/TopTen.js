import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadReleasesSearch} from "../../Redux/Actions/ReleasesAction";
import loading from "../../assets/loading.jpeg";
import AddButton from "../Common/AddButton";

function TopTen(props) {
  const [topTenData, setTopTenData] = useState([]);
  const data = useSelector((state) => state);
  const introData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  return topTenData.length > 0 ? (
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
        <div className="navButtons" onClick={searchHandler}>
          <AddButton topTen={true} />
        </div>
      </div>
    </div>
  ) : (
    <div className="topTenContainer">
      <div>
        <h4>Top Ten</h4>
      </div>
      <div className="topTenImage">
        {introData.map((i) => (
          <div className="topTenImageHolder" key={i}>
            <img src={loading} alt={i} />
            <p>{i + 1}</p>
          </div>
        ))}
        <div className="navButtons" onClick={searchHandler}>
          <AddButton topTen={true} />
        </div>
      </div>
    </div>
  );
}

export default TopTen;
