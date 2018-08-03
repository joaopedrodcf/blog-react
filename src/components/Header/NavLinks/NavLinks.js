import React from 'react';
import { Nav, Link, Button } from './style';

const NavLinks = ({ toogle, props: { state, logoutRedux } }) => (
  <Nav toogle={toogle}>
    <Link exact to="/">
      Home
    </Link>
    <Link exact to="/contactme">
      Contact me
    </Link>
    {state.reduxIsAuthenticated === false && (
      <Link exact to="/login">
        Login
      </Link>
    )}

    {state.reduxIsAuthenticated === false && (
      <Link exact to="/register">
        Register
      </Link>
    )}

    {state.reduxIsAuthenticated && (
      <Link exact to="/create-post">
        Create post
      </Link>
    )}

    {state.reduxIsAuthenticated && (
      <Button onClick={logoutRedux}>
        Logout: {localStorage.getItem('email')}{' '}
      </Button>
    )}
  </Nav>
);

export default NavLinks;
