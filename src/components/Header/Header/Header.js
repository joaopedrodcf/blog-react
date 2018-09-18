import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Wrapper from './style';
import NavLinks from '../NavLinks/NavLinks';
import Logo from '../Logo/Logo';
import HamburguerButton from '../HamburguerButton/HamburguerButton';

const Header = ({ handleClick }) => (
    <Wrapper>
        <Link to="/">
            <Logo />
        </Link>
        <NavLinks />
        <HamburguerButton handleClick={handleClick} />
    </Wrapper>
);

Header.propTypes = {
    handleClick: PropTypes.func.isRequired
};

export default Header;
