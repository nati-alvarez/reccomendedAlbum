// this component allows the user to see his/her admin information
// as well as updating it and logging out. 

import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useAuth} from "../../Auth/AuthProvider";

function Admin(props) {
  const {currentUser, logout} = useAuth();

  const [error, setError] = useState("");
  const history = useHistory();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }
  return (

    <div className='adminContainer'>
      <strong>Email:</strong> {currentUser.email}
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Admin;
