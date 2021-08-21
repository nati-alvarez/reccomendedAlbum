import React from "react";
import axios from "axios";
import {useEffect} from "react";

function Interim(props) {
  useEffect(() => {
    axios
      // .get("https://rlca-backend.herokuapp.com/identity")
      .get("http://localhost:3001/identity")
      .then(function (response) {
        console.log(response);

        axios
          // .post("https://rlca-backend.herokuapp.com/user/", {
          .post("http://localhost:3001/user/", {
            idNum: response.data.id,
            name: response.data.username,
          })
          .then(function () {
            window.location = "http://localhost:3000/dashboard";
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <div>AUTHORIZING</div>;
}

export default Interim;
