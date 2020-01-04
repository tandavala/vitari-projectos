import React, { Component } from "react";

//To access store and reducer
import { connect } from "react-redux";

//import Redirect module
import { Redirect } from "react-router-dom";

//for action connection
import { signUp } from "../../store/actions/authAction";

class SignUp extends Component {
  //for inputs field
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  //for change in input
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  //If the form is submitted, it will work.
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    console.log(authError);

    //If uid is not empty, user is logged in.
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          {/* for email in auth */}
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          {/* for password in auth */}
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          {/* for first name in firestore */}
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          {/* for last name in firestore */}
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
            <div className="red-text center">
              {/* If there is data in authError, it means that it has received an error. */}
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
//Function to access store
const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};

//Function to access store
const mapStateToProps = state => {
  return {
    //We are accessing the auth object in firebaseReducer.
    auth: state.firebase.auth,
    //We are accessing the authError object.
    authError: state.auth.authError
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
