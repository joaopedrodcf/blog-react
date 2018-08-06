import React from 'react';
import { Nav, Link, Button } from './style';

const NavLinks = ({ toogle, reduxIsAuthenticated, email, logoutRedux }) => (
  <Nav toogle={toogle}>
    <Link exact to="/">
      Home
    </Link>
    <Link exact to="/contactme">
      Contact me
    </Link>
    {reduxIsAuthenticated === false && (
      <Link exact to="/login">
        Login
      </Link>
    )}

    {reduxIsAuthenticated === false && (
      <Link exact to="/register">
        Register
      </Link>
    )}

    {reduxIsAuthenticated && (
      <Link exact to="/create-post">
        Create post
      </Link>
    )}

    {reduxIsAuthenticated && (
      <Button onClick={logoutRedux}>Logout: {email} </Button>
    )}
  </Nav>
);

export default NavLinks;
