// import Admin from "./Admin";
import {useDispatch} from "react-redux";
import {getUserInfo} from "../../Redux/Actions/userActions";
import ProfileSection from "./ProfileSection";
// import ListenNext from "./ListenNext";
// import NextShipment from "./NextShipment";
import TopTen from "./TopTen";

function Index(props) {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  if (userId) {
    dispatch(getUserInfo());
  }

  return (
    <div className="dashBoardContainer">
      <TopTen />

      <ProfileSection />
      {/* <Admin /> */}
      {/* <ListenNext/>
      
      <NextShipment/> */}
    </div>
  );
}

export default Index;
