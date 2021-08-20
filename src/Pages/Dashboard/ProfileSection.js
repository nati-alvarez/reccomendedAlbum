import axios from "axios";
import {useEffect, useState} from "react";

const ProfileSection = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    id: Math.random(),
  });
  // const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("https://rlca-backend.herokuapp.com/identity")
      .then(function (response) {
        console.log(response);
        axios.post("https://rlca-backend.herokuapp.com/user/", {
          idNum: response.data.id,
          name: response.data.username,
        });
        setUserInfo({
          name: response.data.username,
          id: response.data.id,
        });
        axios
          .get(`https://rlca-backend.herokuapp.com/user/${userInfo.id}`)
          .then(function (response) {
            setUserInfo(response.data);
          });
      })
      .catch(function (error) {
        console.log(error);
      });

    // eslint-disable-next-line
  }, []);

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
