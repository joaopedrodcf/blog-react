import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';
import CloseButton from '../CloseButton';
import Links from '../Links';

const HeaderMobile = ({ toogle, handleClick, reduxIsAuthenticated }) => (
    <Wrapper toogle={toogle}>
        <CloseButton handleClick={handleClick}>
            <Links reduxIsAuthenticated={reduxIsAuthenticated} />
        </CloseButton>
    </Wrapper>
);

HeaderMobile.propTypes = {
    toogle: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    reduxIsAuthenticated: PropTypes.bool.isRequired
};

export default HeaderMobile;
