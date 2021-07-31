import React, {useContext, useEffect, useState} from "react";
import {auth} from "../Auth/firebase";
import {useDispatch} from "react-redux";
import { signButton } from "../Redux/Actions/navSelectorAction";

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
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    dispatch(signButton(true));
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    dispatch(signButton(false));
    return auth.signOut()
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
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
