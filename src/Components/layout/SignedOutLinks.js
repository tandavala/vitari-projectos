import React from "react";
import { NavLink } from "react-router-dom";

const SignOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">Criar conta</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Entrar</NavLink>
      </li>
    </ul>
  );
};

export default SignOutLinks;
