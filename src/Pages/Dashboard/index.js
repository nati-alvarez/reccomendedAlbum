import React from "react";
import Admin from "./Admin";
// import ListenNext from "./ListenNext";
// import NextShipment from "./NextShipment";
import TopTen from "./TopTen";

function index(props) {
  return (
    <div className='dashBoardContainer'>
      <TopTen/>
      <Admin />
      {/* <ListenNext/>
      
      <NextShipment/> */}

    </div>
  );
}

export default index;
