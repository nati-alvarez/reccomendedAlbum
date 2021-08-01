import React from "react";
import {database} from "../../Auth/firebase";

import {useAuth} from "../../Auth/AuthProvider";
import {v4 as uuidv4} from "uuid";
import AddButton from "../../Common/AddButton";
function TopTen(props) {
  const {currentUser} = useAuth();

  const getUserId = () => {
    let userId = ""
    let data = database.topTen.doc("1");
    data
      .get()
      .then((doc) => {
        if (doc.exists) {
          data = doc.data();
          // console.log(data.userId)
          userId = data.userId;
        } else {
          // doc.data() will be undefined in this case
          // console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
      return userId
  };

  const getTopTenData = () => {
    const topTenData = [];

    for (let i = 1; i < 10; i++) {
      let data = database.topTen.doc(i.toString());
      data
        .get()
        .then((doc) => {
          if (doc.exists) {
            data = doc.data();
            topTenData.push(data);
          } else {
            // doc.data() will be undefined in this case
            // console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }

    return topTenData;
  };
  const userId = getUserId();
  const data = getTopTenData();
  console.log(getUserId());
  return (
    <div className="topTenContainer">
      <div>
        <h4>Top Ten</h4>
      </div>
      <div className="topTenImage">
        <div className="navButtons">
          <AddButton />
        </div>
        {currentUser.uid === data.userId ? (
          data.map((image) => (
            <img src={image} alt="topTenImage" key={uuidv4()} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default TopTen;
