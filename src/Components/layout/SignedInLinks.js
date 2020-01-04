import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../store/actions/authAction";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New project</NavLink>
      </li>
      <li>
        <li>
          <a onClick={props.signOut}>Log Out</a>
        </li>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating red">
          PK
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
