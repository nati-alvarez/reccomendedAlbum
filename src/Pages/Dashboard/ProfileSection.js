import axios from "axios";
import {useEffect, useState} from "react";

const ProfileSection = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
  });

  useEffect(() => {
    axios
      .get("https://rlca-backend.herokuapp.com/user/610f0899fbc8aa0d170023eb")
      .then(function (response) {
        setUserInfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="ProfileSectionContainer">
      <div>
        <img src={userInfo.avatar} alt="avatar" />
      </div>
      <div className="userInfo">
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>

        <label>
          <p>Sonic Deducer</p>
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default ProfileSection;
