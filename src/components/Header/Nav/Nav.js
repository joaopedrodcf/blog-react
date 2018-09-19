import React from 'react';
import PropTypes from 'prop-types';
import NavWrapper from './style'; // TODO this need to be revised
import Button from '../Button';
import Links from '../Links';

const Nav = ({ reduxIsAuthenticated, email, logoutRedux }) => (
    <NavWrapper>
        <Links reduxIsAuthenticated={reduxIsAuthenticated} />
        {reduxIsAuthenticated && (
            <Button email={email} logoutRedux={logoutRedux} />
        )}
    </NavWrapper>
);

Nav.propTypes = {
    reduxIsAuthenticated: PropTypes.bool.isRequired,
    email: PropTypes.string,
    logoutRedux: PropTypes.func.isRequired
};

Nav.defaultProps = {
    email: null
};

export default Nav;
