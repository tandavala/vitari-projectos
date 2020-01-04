import React from "react";

import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    //navbar forming class
    <nav className="nav-wrapper light-blue lighten-2">
      <div className="container">
        <Link to="/" className="brand-logo">
          Project Blog
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
