import React from "react";
import axios from "axios";
import {useEffect} from "react";

const Interim = (props) => {
  useEffect(() => {
    axios
      // .get("https://rlca-backend.herokuapp.com/identity")
      .get("http://localhost:3001/identity")
      .then(function (response) {
        axios
          // .post("https://rlca-backend.herokuapp.com/user/", {
          .post("http://localhost:3001/user/", {
            idNum: response.data.id,
            name: response.data.username,
          })
          .then(function () {
            localStorage.setItem("userID", response.data.id);
            localStorage.setItem("username", response.data.username);
            window.location =
              "https://sonic-architecture-v1.netlify.app/dashboard";
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
