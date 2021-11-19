import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyApXE-iplms4-oCT2c8vqoE5N4LYd15y6s",
  authDomain: "crwn-db-f672c.firebaseapp.com",
  projectId: "crwn-db-f672c",
  storageBucket: "crwn-db-f672c.appspot.com",
  messagingSenderId: "127282951232",
  appId: "1:127282951232:web:43c1db1d0a5037b0691ba5",
  measurementId: "G-X99GJ5SK74",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
