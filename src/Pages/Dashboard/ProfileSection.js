import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../../Redux/Actions/userActions";

const ProfileSection = () => {
  const userId = localStorage.getItem("userID");
  const dispatch = useDispatch();
  dispatch(userActions(userId));
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
  console.log(userInfo);
  // useEffect(() => {
  //   if (userInfo.id !== 13) {
  //     axios
  //       // .post("https://rlca-backend.herokuapp.com/user/", {
  //       .post("http://localhost:3001/user/", {
  //         idNum: userInfo.id,
  //         name: userInfo.name,
  //       })
  //       .then(function () {
  //         axios
  //           // .get(`https://rlca-backend.herokuapp.com/user/${userInfo.id}`)
  //           .get(`http://localhost:3001/user/${userInfo.id}`)
  //           .then(function (response) {
  //             console.log(userInfo.id);
  //             console.log(response.data);
  //             localStorage.setItem("userName", userInfo.name);
  //             localStorage.setItem("userID", userInfo.id);
  //             dispatch(userActions(userInfo.id));
  //           });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  //   // eslint-disable-next-line
  // }, [userInfo]);

  // console.log(userInfo);
  return userInfo ? (
    <div className="ProfileSectionContainer">
      <div>{/* <img src={userInfo.avatar} alt="avatar" /> */}</div>
      <div className="userInfo">
        <p>Name: {userInfo.name}</p>
        <p>ID: {userInfo.idNum}</p>
        {/* <p>Email: {userInfo.email}</p> */}

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
