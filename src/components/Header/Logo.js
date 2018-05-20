import Radium from 'radium';
import React from 'react';
import image from './my_first_logo.png';
import styles from './Logo.style';

const Logo = () => (
  <div>
    <img style={styles.logo} src={image} alt="about-me-img" />
  </div>
);

export default Radium(Logo);
