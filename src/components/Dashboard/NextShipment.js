import React from "react";
import picture from "../../assets/genre.png";
// import {useAuth} from "../../Auth/AuthProvider";
import {v4 as uuidv4} from "uuid";

function NextShipment(props) {
  // const {currentUser} = useAuth();
  const data = [
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
    picture,
  ];
  return (
    <div className="nextShipContainer">
      <h4>Next Shipment</h4>
      <div className="nextShipImage">
        <button className="requestButton">Request A Title</button>
        {data.map((image) => (
          <img src={image} alt="topTenImage" key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}

export default NextShipment;
