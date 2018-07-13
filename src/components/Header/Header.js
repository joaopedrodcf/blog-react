import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerLogoIcon } from './style';
import NavLinks from './NavLinks/NavLinks';
import Logo from './Logo/Logo';
import Button from './Button/Button';

const Header = props => (
  <React.Fragment>
    <ContainerLogoIcon>
      <Link to="/">
        <Logo />
      </Link>
      <Button handleClick={props.handleClick} />
    </ContainerLogoIcon>
    <NavLinks {...props} />
  </React.Fragment>
);

export default Header;
