import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './style';

const CloseButton = ({ handleClick, children }) => (
    <Container onClick={handleClick}>
        {children}
        <Button>
            <i className="far fa-window-close" />
        </Button>
    </Container>
);

CloseButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default CloseButton;
