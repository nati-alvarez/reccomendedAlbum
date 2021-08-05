import picture from "../../assets/genre.png";

import {useAuth} from "../../Auth/AuthProvider";

const ProfileSection = () => {
  const {currentUser} = useAuth();

  return (
    <div className="ProfileSectionContainer">
      <div>
        <img src={picture} alt="Profile" />
      </div>
      <div className="userInfo">
        <p>Name: name</p>
        <p>Email: {currentUser.email}</p>
        <p>Artist Name: nickname</p>
        <p>Address: </p>
        <p>Bio: </p>
        <p>Favorite Artists: </p>
        <label>
          <p>Sonic Deducer</p>
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default ProfileSection;
