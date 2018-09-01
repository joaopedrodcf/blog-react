import React from 'react';
import Container from './style';

const Button = ({ handleClick }) => (
    <Container onClick={handleClick}>
        <i className="fas fa-bars fa-2x" />
    </Container>
);

export default Button;
