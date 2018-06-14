import React from 'react';
import { Nav, Link, Button } from './style';

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

    {props.isAuthenticated && (
      <Link exact to="/create-post">
        Create post
      </Link>
    )}

    {props.isAuthenticated && (
      <Button onClick={props.logout}>
        Logout: {localStorage.getItem('email')}{' '}
      </Button>
    )}
  </Nav>
);

export default NavLinks;
