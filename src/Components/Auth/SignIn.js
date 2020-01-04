import React, { Component } from "react";

//To access store and reducer
import { connect } from "react-redux";
//To access action
import { logIn } from "../../store/actions/authAction";

//import Redirect module
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  //for inputs
  state = {
    email: "",
    password: ""
  };
  //will work when the input is changed.
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  //will work when the form is submit.
  handleSubmit = e => {
    e.preventDefault();
    //action function
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    //If uid is not empty, user is logged in.
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">LogIn</h5>
          {/* for email */}
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          {/* for password */}
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          {/* for submit */}
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">Login</button>
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
//Function to access action
const mapDispatchToProps = dispatch => {
  return {
    signIn: info => dispatch(logIn(info))
  };
};
//Function to access store
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    //We are accessing the auth object in firebaseReducer.
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
