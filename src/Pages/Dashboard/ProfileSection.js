import axios from "axios";
import {useEffect, useState} from "react";
// import {useDispatch} from "react-redux";
// import {getUserInfo} from "../../Redux/Actions/getUserInfo";

const ProfileSection = () => {
  const userId = localStorage.getItem("userID");
  // const dispatch = useDispatch();
  // dispatch(getUserInfo(userId));
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    axios
      // .get(`https://rlca-backend.herokuapp.com/user/${userInfo.id}`)
      .get(`http://localhost:3001/user/${userId}`)
      .then(function (response) {
        setUserInfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  return userInfo ? (
    <div className="ProfileSectionContainer">
      <div>{/* <img src={userInfo.avatar} alt="avatar" /> */}</div>
      <div className="userInfo">
        <p>Name: {userInfo.name}</p>
        <p>ID: {userInfo.idNum}</p>
        <label>
          <p>Sonic Deducer</p>
          <input type="checkbox" />
        </label>
      </div>
    </div>
  ) : (
    <>LOADING</>
  );
};

export default ProfileSection;
