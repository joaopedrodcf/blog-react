import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 20px;
    ${props => !props.toogle && 'display: none;'};

    /* Links begin closed when screen is small */
  }
`;

export const Link = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  margin: auto 10px;
  padding: 19px 0;
  text-decoration: none;
  color: white;
  border-bottom: 4px solid transparent;

  &:hover {
    border-bottom: 4px solid #fff;
  }

  &.active {
    border-bottom: 4px solid #fff;
  }
`;

export const Button = styled.button`
  margin: 0 10px;
  border: none;
  padding: 15px 32px;
  border-radius: 2px;
  background-color: white;

  &:hover {
    background-color: grey;
  }
`;
