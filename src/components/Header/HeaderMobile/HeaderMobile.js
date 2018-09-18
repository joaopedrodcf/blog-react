import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';
import CloseButton from '../CloseButton';

const HeaderMobile = ({ toogle, handleClick }) => (
    <Wrapper toogle={toogle}>
        <CloseButton handleClick={handleClick} />
    </Wrapper>
);

HeaderMobile.propTypes = {
    toogle: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default HeaderMobile;
