// import { useAuth } from "../../Auth/AuthProvider";
// these actions handle the users populate the users unique content inside their dashboard
// once the user logs in these actions are executed.

export const userActions = (id) => (dispatch) => {
  // const { currentUser } = useAuth()
  dispatch({
    type: "FETCH_USER_DATA",
    payload: {
      loading: true,
    },
  });
  console.log(`from inside the action ${id}`);
  // const topTenData = [];

  // for (let i = 1; i < 10; i++) {
  //   let data = database.topTen.doc(i.toString());
  //   data
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         data = doc.data();
  //         // if (data.userId === currentUser.uid) {
  //             topTenData.push(data);
  //         // }
  //       } else {
  //         // doc.data() will be undefined in this case
  //         console.log("No such document!");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error getting document:", error);
  //     });
  // }

  dispatch({
    type: "FETCH_USER_DATA_SUCCESS",
    payload: {
      id: id,
      loading: false,
    },
  });
};
