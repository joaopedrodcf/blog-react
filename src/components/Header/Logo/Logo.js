import React from 'react';
import { Link } from 'react-router-dom';

import image from './logo.png';
import Img from './style';

const Logo = () => (
  <Link to="/">
    <Img src={image} alt="about-me-img" />
  </Link>
);

export default Logo;
