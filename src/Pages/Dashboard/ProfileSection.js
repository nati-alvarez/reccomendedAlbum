import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../../Redux/Actions/userActions";

const ProfileSection = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.all[0]);

  useEffect(() => {
    dispatch(getUserInfo());
    // eslint-disable-next-line
  }, []);

  return data ? (
    <div className="ProfileSectionContainer">
      <div>{/* <img src={userInfo.avatar} alt="avatar" /> */}</div>
      <div className="userInfo">
        <p>Name: {data.name}</p>
        <p>ID: {data.idNum}</p>
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
