import React, {useContext, useEffect, useState} from "react";
import {auth} from "../Auth/firebase";
import {useDispatch} from "react-redux";
import {navSelectorDispatch, userID} from "../Redux/Actions/navSelectorAction";
import {loadReleasesSearch} from "../Redux/Actions/ReleasesAction";
import {userActions} from "../Redux/Actions/userActions";
import axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    dispatch(navSelectorDispatch("label"));

    axios.get('/auth/authorize')
  .then(function (response) {
    console.log(response);
    return response
  })
  .catch(function (error) {
    console.log(error);
  });




    // return auth.createUserWithEmailAndPassword(email, password);
  }

  function sendId(name, email, set) {
    let id;
    if (set) {
      console.log("post")
      axios
        .post("https://rlca-backend.herokuapp.com/user/", {
          name: name,
          email: email,
        })
        .then(function (response) {
          console.log(response);
          id = response.data.id;
        })
        .catch(function (error) {
          console.log(error);
        });
        dispatch(userID(id));
    } else {
      console.log("get")
      axios
        .get(`/user/${name}`)
        .then(function (response) {
          console.log(response);
          id = response.data.id;
        })
        .catch(function (error) {
          console.log(error);
        });
        dispatch(userID(id));
    }
  }

  function login(email, password) {
    //user actions pulls in user data from the db
    dispatch(userActions());
    //load releases pulls in label info from the api
    //this can be removed once the db is properly set up.
    dispatch(loadReleasesSearch());
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
    resetPassword,
    sendId,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
