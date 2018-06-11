import React from 'react';
import { Nav, Link } from './style';

const NavLinks = props => (
  <Nav {...props}>
    <Link exact to="/">
      Home
    </Link>
    <Link exact to="/contactme">
      Contact me
    </Link>

    {props.isAuthenticated === false && (
      <Link exact to="/login">
        Login
      </Link>
    )}

    {props.isAuthenticated === false && (
      <Link exact to="/register">
        Register
      </Link>
    )}

    {props.isAuthenticated && <button onClick={props.logout}>Logout</button>}
  </Nav>
);

export default NavLinks;
