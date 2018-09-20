import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';
import CloseButton from '../CloseButton';

const HeaderMobile = ({ toogle, handleClick, reduxIsAuthenticated }) => (
    <Wrapper toogle={toogle}>
        <CloseButton
            handleClick={handleClick}
            reduxIsAuthenticated={reduxIsAuthenticated}
        />
    </Wrapper>
);

HeaderMobile.propTypes = {
    toogle: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    reduxIsAuthenticated: PropTypes.bool.isRequired
};

export default HeaderMobile;
