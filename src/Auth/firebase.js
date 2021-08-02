import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const userApp = firebase.initializeApp({

});



const firestore = userApp.firestore()
export const database = {
    label: firestore.collection('label'),
    artist: firestore.collection('artist'),
    title: firestore.collection('title'),
    topTen: firestore.collection('topTen')
}

export const auth = userApp.auth();

export default userApp;
