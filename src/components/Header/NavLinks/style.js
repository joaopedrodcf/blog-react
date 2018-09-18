import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${props => props.theme.colorPrimaryDark};

    /* Links begin closed when screen is small */
    @media (max-width: 600px) {
        flex-direction: column;
        padding: 20px;
        height: auto;
        ${props => !props.toogle && 'display: none;'};
    }
`;

export const Link = styled(NavLink).attrs({
    activeClassName: 'active'
})`
    margin: auto 10px;
    padding: 19px 0;
    text-decoration: none;
    color: ${props => props.theme.colorWhite};
    border-bottom: 4px solid transparent;
    height: 100%;
    font-size: 2rem;

    &:hover {
        border-bottom: 4px solid ${props => props.theme.colorWhite};
    }

    &.active {
        border-bottom: 4px solid ${props => props.theme.colorWhite};
    }
`;

export const Button = styled.button`
    margin: 10px 10px;
    border: none;
    padding: 15px 32px;
    border-radius: 2px;
    background-color: ${props => props.theme.colorWhite};

    &:hover {
        background-color: ${props => props.theme.colorGrayDark};
    }
`;
