import React, {useContext, useEffect, useState} from "react";
import {auth} from "../Auth/firebase";
import {useDispatch} from "react-redux";
import {
  navSelectorDispatch,
  signButton,
} from "../Redux/Actions/navSelectorAction";
import {loadReleasesOnLogin} from "../Redux/Actions/ReleasesAction";
import {userActions} from "../Redux/Actions/userActions";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    dispatch(signButton(true));
    dispatch(navSelectorDispatch("label"));
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    dispatch(userActions());
  dispatch(loadReleasesOnLogin())
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    dispatch(signButton(false));
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
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
