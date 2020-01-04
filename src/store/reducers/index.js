import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  auth: authReducer,
  projects: projectReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
