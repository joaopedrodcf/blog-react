import React from 'react';
import PropTypes from 'prop-types';
import Link from './style';

const Links = ({ isAuthenticated }) => (
    <React.Fragment>
        <Link exact to="/">
            Home
        </Link>
        <Link exact to="/contactus">
            Contact us
        </Link>
        {isAuthenticated === false && (
            <React.Fragment>
                <Link exact to="/login">
                    Login
                </Link>
                <Link exact to="/register">
                    Register
                </Link>
            </React.Fragment>
        )}

        {isAuthenticated === true && (
            <Link exact to="/create-post">
                Create post
            </Link>
        )}
    </React.Fragment>
);

Links.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

export default Links;
