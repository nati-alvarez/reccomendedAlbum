import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../../Redux/Actions/userActions";
const ProfileSection = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    name: "",
    id: 13,
    avatar: "https://i.ebayimg.com/images/g/QBIAAOSw3BBeemIN/s-l500.jpg",
  });
  // const [users, setUsers] = useState();

  useEffect(() => {
    axios
      // .get("https://rlca-backend.herokuapp.com/identity")
      .get("http://localhost:3001/identity")
      .then(function (response) {
        console.log(response);
        setUserInfo({
          name: response.data.username,
          id: response.data.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (userInfo.id !== 13) {
      axios
        // .post("https://rlca-backend.herokuapp.com/user/", {
        .post("http://localhost:3001/user/", {
          idNum: userInfo.id,
          name: userInfo.name,
        })
        .then(function () {
          axios
            // .get(`https://rlca-backend.herokuapp.com/user/${userInfo.id}`)
            .get(`http://localhost:3001/user/${userInfo.id}`)
            .then(function (response) {
              console.log(userInfo.id);
              console.log(response.data);
              localStorage.setItem("userName", userInfo.name);
              localStorage.setItem("userID", userInfo.id);
              dispatch(userActions(userInfo.id));
            });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, [userInfo]);

  console.log(userInfo);
  return (
    <div className="ProfileSectionContainer">
      <div>
        <img src={userInfo.avatar} alt="avatar" />
      </div>
      <div className="userInfo">
        <p>Name: {userInfo.name}</p>
        <p>ID: {userInfo.id}</p>
        {/* <p>Email: {userInfo.email}</p> */}

        <label>
          <p>Sonic Deducer</p>
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default ProfileSection;
