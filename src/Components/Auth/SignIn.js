import React, { Component } from "react";

//To access store and reducer
import { connect } from "react-redux";

//import Redirect module
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  render() {
    const { auth } = this.props;
    //If uid is not empty, user is logged in.
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          {/* for email in auth */}
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          {/* for password in auth */}
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          {/* for first name in firestore */}
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
          </div>
          {/* for last name in firestore */}
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

//Function to access store
const mapStateToProps = state => {
  return {
    //We are accessing the auth object in firebaseReducer.
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(SignUp);
