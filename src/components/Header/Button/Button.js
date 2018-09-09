import React from 'react';
import PropTypes from 'prop-types';

import Container from './style';

const Button = ({ handleClick }) => (
    <Container onClick={handleClick}>
        <i className="fas fa-bars" />
    </Container>
);

Button.propTypes = {
    handleClick: PropTypes.func.isRequired
};
export default Button;
