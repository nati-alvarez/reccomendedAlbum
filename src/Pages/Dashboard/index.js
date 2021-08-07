import React from "react";
import Admin from "./Admin";
import ProfileSection from "./ProfileSection";
// import ListenNext from "./ListenNext";
// import NextShipment from "./NextShipment";
import TopTen from "./TopTen";

function index(props) {
  return (
    <div className='dashBoardContainer'>
      <TopTen/>
      <Admin />
      <ProfileSection/>
      {/* <ListenNext/>
      
      <NextShipment/> */}

    </div>
  );
}

export default index;
