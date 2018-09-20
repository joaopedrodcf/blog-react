import React from 'react';
import PropTypes from 'prop-types';
import Link from './style';

const Links = ({ reduxIsAuthenticated }) => (
    <React.Fragment>
        <Link exact to="/">
            Home
        </Link>
        <Link exact to="/contactme">
            Contact me
        </Link>
        {reduxIsAuthenticated === false && (
            <React.Fragment>
                <Link exact to="/login">
                    Login
                </Link>
                <Link exact to="/register">
                    Register
                </Link>
            </React.Fragment>
        )}

        {reduxIsAuthenticated === true && (
            <Link exact to="/create-post">
                Create post
            </Link>
        )}
    </React.Fragment>
);

Links.propTypes = {
    reduxIsAuthenticated: PropTypes.bool.isRequired
};

export default Links;
