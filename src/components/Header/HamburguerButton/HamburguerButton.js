import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';

const HamburguerButton = ({ handleClick }) => (
    <Wrapper onClick={handleClick}>
        <i className="fas fa-bars" />
    </Wrapper>
);

HamburguerButton.propTypes = {
    handleClick: PropTypes.func.isRequired
};

export default HamburguerButton;
