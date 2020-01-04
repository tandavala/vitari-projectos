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
