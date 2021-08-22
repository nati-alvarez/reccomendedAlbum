// these actions handle the users populate the users unique content inside their dashboard
// once the user logs in these actions are executed.

import axios from "axios";

export const getUserInfo = (id) => (dispatch) => {
  dispatch({
    type: "FETCH_USER_DATA",
    payload: {
      loading: true,
    },
  });

  dispatch({
    type: "FETCH_USER_DATA_SUCCESS",
    payload: {
      id: id,
      loading: false,
    },
  });

  dispatch({
    type: "ADD_TO_TOP_TEN",
    payload: {
      loading: true,
    },
  });

  dispatch({
    type: "ADD_TO_TOP_TEN_SUCCESS",
    payload: {
      id: id,
      loading: false,
    },
  });
};

export const topTenAction = (data) => async (dispatch) => {
  const userId = localStorage.getItem("userID");
  let topTen = [data];
  await axios
    .get(`http://localhost:3001/user/${userId}`)
    .then(function (response) {
      topTen.push(response.data.topTen);
    })
    .catch(function (error) {
      console.log(error);
    });

  dispatch({
    type: "ADD_TO_TOP_TEN",
    payload: {
      loading: true,
    },
  });

  dispatch({
    type: "ADD_TO_TOP_TEN_SUCCESS",
    payload: {
      data: topTen,
      loading: false,
    },
  });
};
