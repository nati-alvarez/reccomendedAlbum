import firebase from "firebase/app";
import "firebase/auth";

const userApp = firebase.initializeApp({
//   apiKey: "AIzaSyCeJbdoGXUwTwTWFhzU8ap6hU_ORRfqaYA",
//   authDomain: "sonicarchitecture-development.firebaseapp.com",
//   projectId: "sonicarchitecture-development",
//   storageBucket: "sonicarchitecture-development.appspot.com",
//   messagingSenderId: "333897536752",
//   appId: "1:333897536752:web:660ff460bf34ded2d61e35",

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = userApp.auth();

export default userApp;
