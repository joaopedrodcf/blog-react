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
  </Nav>
);

export default NavLinks;
