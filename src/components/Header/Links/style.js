import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const color = props => props.theme.color.white;
const fontSize = props => props.theme.typography.lg;
const space = props => props.theme.space.md;

const Link = styled(NavLink).attrs({
    activeClassName: 'active'
})`
    padding: ${space};
    text-decoration: none;
    color: ${color};
    border-bottom: 4px solid transparent;
    height: 100%;
    font-size: ${fontSize};

    &:hover {
        border-bottom: 4px solid ${color};
    }

    &.active {
        border-bottom: 4px solid ${color};
    }
`;

export default Link;
