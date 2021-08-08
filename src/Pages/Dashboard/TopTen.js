import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadReleasesSearch } from "../../Redux/Actions/ReleasesAction";


import AddButton from "../Common/AddButton";


function TopTen(props) {
  const [topTenData, setTopTenData]  = useState([]) 
  const data = useSelector((state) => state);
  
  const dispatch = useDispatch();

useEffect(() => {
  axios.get('https://rlca-backend.herokuapp.com/user/610f0899fbc8aa0d170023eb')
  .then(function (response) {
    console.log(response);
    setTopTenData(response.data.topTen)
  })
  .catch(function (error) {
    console.log(error);
  });
}, [])


const searchHandler = () => {
  // if the reducer does not have all search data run the all data
  //fetcher, otherwise this will have been run when the user logged in.
  if (data.releases.search && data.releases.search.length > 0) {
    return
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
            <img src={data} alt={i}/>
            <p>{i + 1}</p>
          </div>
        ))}
        <div className="navButtons" onClick={searchHandler}>
          <AddButton topTen={true} />
        </div>
      </div>
    </div>
  ) : (
    <>
      <p>LOADING</p>
    </>
  );
}

export default TopTen;
