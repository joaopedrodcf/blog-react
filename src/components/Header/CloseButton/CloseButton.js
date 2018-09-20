import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './style';

import Links from '../Links';

const CloseButton = ({ handleClick, reduxIsAuthenticated }) => (
    <Container onClick={handleClick}>
        <Button>
            <i className="far fa-window-close" />
        </Button>
        <div>
            <Links reduxIsAuthenticated={reduxIsAuthenticated} />
        </div>
    </Container>
);

CloseButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    reduxIsAuthenticated: PropTypes.bool.isRequired
};

export default CloseButton;
