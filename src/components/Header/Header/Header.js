import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Wrapper from './style';
import Nav from '../Nav';
import Logo from '../Logo';
import HamburguerButton from '../HamburguerButton';

const Header = ({ handleClick, reduxIsAuthenticated, email, logoutRedux }) => (
    <Wrapper>
        <Link to="/">
            <Logo />
        </Link>
        <Nav
            reduxIsAuthenticated={reduxIsAuthenticated}
            email={email}
            logoutRedux={logoutRedux}
        />
        <HamburguerButton handleClick={handleClick} />
    </Wrapper>
);

Header.propTypes = {
    reduxIsAuthenticated: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    logoutRedux: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};

export default Header;
