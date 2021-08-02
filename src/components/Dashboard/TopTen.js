import React from "react";
import {useSelector} from "react-redux";

import AddButton from "../../Common/AddButton";
function TopTen(props) {
  const topTenData = useSelector((state) => state.user);

  return (
    <div className="topTenContainer">
      <div>
        <h4>Top Ten</h4>
      </div>
      <div className="topTenImage">
        {topTenData.topTen.map((data, i) => (
          <div className='topTenImageHolder' key={i}>
            <img src={data.image.image} />
          </div>
        ))}
        <div className="navButtons">
          <AddButton />
        </div>
      </div>
    </div>
  );
}

export default TopTen;
