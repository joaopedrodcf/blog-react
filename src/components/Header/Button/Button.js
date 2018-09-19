import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';

const Button = ({ logoutRedux, email }) => (
    <Wrapper onClick={logoutRedux}>Logout: {email} </Wrapper>
);

Button.propTypes = {
    logoutRedux: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};

export default Button;
