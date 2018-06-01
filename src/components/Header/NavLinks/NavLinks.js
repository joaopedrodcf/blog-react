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
    <Link exact to="/login">
      Login
    </Link>
    <Link exact to="/register">
      Register
    </Link>
  </Nav>
);

export default NavLinks;
