//default data is used if no state data is assigned.
const initState = {
  //error variable
  authError: null
};

//create reducer with state and action parameters
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      //Importing authError in state
      return {
        ...state,
        authError: "login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};

export default authReducer;
