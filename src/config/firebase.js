import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCqaLFGlcWXKOjv-UOa8g8X_e2d0bmrapw",
  authDomain: "blog-906fc.firebaseapp.com",
  databaseURL: "https://blog-906fc.firebaseio.com",
  projectId: "blog-906fc",
  storageBucket: "blog-906fc.appspot.com",
  messagingSenderId: "679636346510",
  appId: "1:679636346510:web:865f42a40b69bd4c5c8bdf",
  measurementId: "G-KPDPYZ7Q6W"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
