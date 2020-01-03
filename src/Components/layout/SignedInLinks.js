import React from "react";
import { NavLink } from "react-router-dom";

const SignInLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">New project</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating red">
          PK
        </NavLink>
      </li>
    </ul>
  );
};

export default SignInLinks;
