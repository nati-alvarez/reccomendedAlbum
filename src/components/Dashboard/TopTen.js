import React from "react";
import {useSelector, useDispatch} from "react-redux";

import AddButton from "../../Common/AddButton";
import { userActions } from "../../Redux/Actions/userActions";

function TopTen(props) {
  const dispatch = useDispatch()
  const topTenData = useSelector((state) => state.user.topTen);
  if (topTenData === []) {
    dispatch(userActions())
    console.log("two", topTenData)
  } else {
    console.log("works")
    console.log(topTenData)
  }

  return topTenData ? (
    <div className="topTenContainer">
      <div>
        <h4>Top Ten</h4>
      </div>
      <div className="topTenImage">
        {topTenData.map((data, i) => (
          <div className="topTenImageHolder" key={i}>
            <img src={data.image.image} alt={data.name.name}/>
            <p>{i + 1}</p>
          </div>
        ))}
        <div className="navButtons">
          <AddButton />
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
