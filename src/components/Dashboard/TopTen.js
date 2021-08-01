import React from "react";
// import picture from "../../assets/genre.png";
// import {useAuth} from "../../Auth/AuthProvider";
// import {v4 as uuidv4} from "uuid";
import AddButton from "../../Common/AddButton";
function TopTen(props) {
  // const {currentUser} = useAuth();

  // const data = [
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  //   picture,
  // ];

  return (
    <div className="topTenContainer">
      <div>
        <h4>Top Ten</h4>
      </div>
      <div className="topTenImage">
      <div className="navButtons">
      <AddButton />
      </div>
        {/* {data.map((image) => (
          <img src={image} alt="topTenImage" key={uuidv4()} />
        ))} */}
      </div>
    </div>
  );
}

export default TopTen;
