import React from "react";
//to perform routing
import { NavLink } from "react-router-dom";

//to access action
import { connect } from "react-redux";
//for action function
import { signOut } from "../../store/actions/authAction";

const SignedInLinks = props => {
  return (
    // links to the right
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating red">
          {props.profile.monogram}
        </NavLink>
      </li>
    </ul>
  );
};

//The function that allows the action to be used in the component
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
