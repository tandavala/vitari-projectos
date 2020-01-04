import React from "react";

export default function SignUp() {
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
