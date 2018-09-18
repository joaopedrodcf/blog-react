import React from 'react';
import PropTypes from 'prop-types';
import NavWrapper from './style'; // TODO this need to be revised

const Nav = ({ toogle, reduxIsAuthenticated, email, logoutRedux }) => (
    <NavWrapper
        toogle={toogle}
        reduxIsAuthenticated={reduxIsAuthenticated}
        email={email}
        logoutRedux={logoutRedux}
    >
        <div>test</div>
    </NavWrapper>
);

Nav.propTypes = {
    toogle: PropTypes.bool.isRequired,
    reduxIsAuthenticated: PropTypes.bool.isRequired,
    email: PropTypes.string,
    logoutRedux: PropTypes.func.isRequired
};

Nav.defaultProps = {
    email: null
};

export default Nav;
