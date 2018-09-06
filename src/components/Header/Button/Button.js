import React from 'react';
import PropTypes from 'prop-types';

import Container from './style';

const Button = ({ handleClick }) => (
    <Container onClick={handleClick}>
        <i className="fas fa-bars fa-2x" />
    </Container>
);

Button.propTypes = {
    handleClick: PropTypes.func.isRequired
};
export default Button;
