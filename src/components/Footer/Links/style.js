import styled from 'styled-components';

const Link = styled.a`
    margin: 0 ${props => props.theme.space.lg};
    display: inline-block;
    transition: 0.3s;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.color.white};

    &:hover {
        transform: scale(1.2);
    }
`;

export default Link;
