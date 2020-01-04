import React from "react";

import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

import { connect } from "react-redux";

const Navbar = props => {
  const { auth } = props;

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    //navbar forming class
    <nav className="nav-wrapper light-blue lighten-2">
      <div className="container">
        <Link to="/" className="brand-logo">
          VitariBlog
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Navbar);
