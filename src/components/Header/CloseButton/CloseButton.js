import React from 'react';
import PropTypes from 'prop-types';
import Container from './style';

const CloseButton = ({ handleClick }) => (
    <Container onClick={handleClick}>
        <i className="far fa-window-close" />
    </Container>
);

CloseButton.propTypes = {
    handleClick: PropTypes.func.isRequired
};

export default CloseButton;
