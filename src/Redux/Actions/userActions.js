// these actions handle the users populate the users unique content inside their dashboard
// once the user logs in these actions are executed.

import axios from "axios";

export const getUserInfo = () => async (dispatch) => {
  dispatch({
    type: "FETCH_USER_DATA",
    payload: {
      loading: true,
    },
  });

  const userId = localStorage.getItem("userID");
  const allData = [];
  await axios
    .get(`https://rlca-backend.herokuapp.com/user/${userId}`)
    .then(function (response) {
      allData.push(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  dispatch({
    type: "FETCH_USER_DATA_SUCCESS",
    payload: {
      id: userId,
      all: allData,
      loading: false,
    },
  });
};

export const topTenAction = (data) => async (dispatch) => {
  const userId = localStorage.getItem("userID");
  let topTen = [data];
  await axios
    .get(`https://rlca-backend.herokuapp.com/user/${userId}`)
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

export const addLabel = (id) => async (dispatch) => {
  
  
  dispatch({
    type: "ADD_LABEL",
    payload: {
      loading: true,
    },
  });
  const userId = localStorage.getItem("userID");
  let labels = [];
  await axios
    .patch(`https://rlca-backend.herokuapp.com/user/${userId}`, {
      labels: id,
    })
    .then(function (response) {
      labels.push(response.data.labels);
    })
    .catch(function (error) {
      console.log(error);
    });



  dispatch({
    type: "ADD_LABEL_SUCCESS",
    payload: {
      labels: labels,
      loading: false,
    },
  });
};
