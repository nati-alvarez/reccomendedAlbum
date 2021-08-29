import React from "react";
import axios from "axios";
import {useEffect} from "react";
import {API_BASE_URL, client_url} from "../../API/APIcall";
const Interim = (props) => {
  console.log(API_BASE_URL);
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/identity`)
      // .get("http://localhost:3001/identity", {withCredentials: true})
      .then(function (response) {
        console.log("hit identity");
        console.log(response);
        axios
          .post(`${API_BASE_URL}/user/`, {
            // .post("http://localhost:3001/user/", {
            idNum: response.data.id,
            name: response.data.username,
          })
          .then(function () {
            localStorage.setItem("userID", response.data.id);
            localStorage.setItem("username", response.data.username);
            window.location = `${client_url}/dashboard`;
            // window.location = "http://localhost:3000/dashboard";
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  return <div>AUTHORIZING</div>;
};

export default Interim;
