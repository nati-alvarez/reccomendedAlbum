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

        setUserInfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
// console.log(userInfo.id, userInfo.username)
//       axios
//       .post("https://rlca-backend.herokuapp.com/user", {
//         idNum: userInfo.id,
//         name: userInfo.username,
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });


//     axios
//       .get(`https://rlca-backend.herokuapp.com/user/${userInfo.id}`)
//       .then(function (response) {
//         setUserInfo(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
      // });
    // eslint-disable-next-line
  }, []);


const activate = () => {


}

  return (
    <div className="ProfileSectionContainer">
      <div>
        <img src={userInfo.avatar} alt="avatar" />
      </div>
      <div className="userInfo">
        <p>Name: {userInfo.name}</p>
        {/* <p>Email: {userInfo.email}</p> */}

        <label>
          <p>Sonic Deducer</p>
          <input type="checkbox" />
        </label>
        <button onClick={activate}>ACTIVATE ACCOUNT</button>
      </div>
    </div>
  );
};

export default ProfileSection;
