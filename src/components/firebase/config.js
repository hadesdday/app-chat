import "firebase/compat/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuf_Wk6CcJ33a3KJr5ynpIHRnMGva7ElA",
  authDomain: "app-chat-50817.firebaseapp.com",
  projectId: "app-chat-50817",
  storageBucket: "app-chat-50817.appspot.com",
  messagingSenderId: "808706507635",
  appId: "1:808706507635:web:caca508f1288174fa5bb06",
  measurementId: "G-C2S6N0G84L",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
