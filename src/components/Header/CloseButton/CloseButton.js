import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './style';

import Links from '../Links';
import LogButton from '../LogButton';

const CloseButton = ({
    handleClick,
    reduxIsAuthenticated,
    email,
    logoutRedux
}) => (
    <Container onClick={handleClick}>
        <Button>
            <i className="far fa-window-close" />
        </Button>
        <div>
            <Links reduxIsAuthenticated={reduxIsAuthenticated} />
            {reduxIsAuthenticated && (
                <LogButton email={email} logoutRedux={logoutRedux} />
            )}
        </div>
    </Container>
);

CloseButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    reduxIsAuthenticated: PropTypes.bool.isRequired,
    logoutRedux: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};

export default CloseButton;
