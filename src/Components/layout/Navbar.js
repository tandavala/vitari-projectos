import React from "react";
//to perform routing
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

//import connect modul
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  //We send the profile to the SignedInLinks component.
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    //navbar forming class
    <nav className="nav-wrapper light-blue lighten-2">
      <div className="container">
        <Link to="/" className="brand-logo">
          Project Blog
        </Link>
        {links}
      </div>
    </nav>
  );
};

//to be used in connect.
const mapStateToProps = state => {
  console.log(state);
  //have to be return
  return {
    auth: state.firebase.auth,
    //We are accessing the profile object in firebaseReducer.
    profile: state.firebase.profile
  };
};

//we should use connect when exporting the component.
export default connect(mapStateToProps)(Navbar);
