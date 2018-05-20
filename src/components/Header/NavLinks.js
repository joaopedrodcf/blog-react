import { NavLink } from 'react-router-dom';
import React from 'react';
import Radium from 'radium';
import styles from './NavLinks.style';

const NavLinks = () => (
  <nav style={styles.navlinks}>
    <NavLink activeStyle={styles.linkActive} style={styles.link} exact to="/">
      Home
    </NavLink>
    <NavLink
      activeStyle={styles.linkActive}
      style={styles.link}
      exact
      to="/contactme"
    >
      Contact me
    </NavLink>
  </nav>
);

export default Radium(NavLinks);
