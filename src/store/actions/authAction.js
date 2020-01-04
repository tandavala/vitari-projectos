//An action called logIn
export const logIn = information => {
  return (dispatch, getState, { getFirebase }) => {
    //We're accessing the firebase
    const firebase = getFirebase();

    //Email and Password method to check the login.
    firebase
      .auth()
      .signInWithEmailAndPassword(
        information.email,
        information.password
        //if login is successful
      )
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
        //if login fails
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

//An action called signOut
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    //We're accessing the firebase
    const firebase = getFirebase();

    //logout operation occurs.
    firebase
      .auth()
      .signOut()
      .then(() => {
        //forwarding to reducer.
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

//action to use component
export const signUp = userNew => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //for firebase authentication
    const firebase = getFirebase();
    //for firebase firestore
    const firestore = getFirestore();

    //We are adding users to firebase.
    firebase
      .auth()
      .createUserWithEmailAndPassword(userNew.email, userNew.password)
      .then(res => {
        //Collection and document creation in firestore
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            //create field in document
            firstName: userNew.firstName,
            lastName: userNew.lastName,
            monogram: userNew.firstName[0] + userNew.lastName[0]
          });
        //if success
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
        //if error
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
