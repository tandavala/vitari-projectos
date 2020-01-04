import React from "react";

export default function SignIn() {
  return (
    <div className="container">
      <form className="white">
        <h5 className="grey-text text-darken-3">LogIn</h5>
        {/* for email */}
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        {/* for password */}
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        {/* for submit */}
        <div className="input-field">
          <button className="btn green lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
}
