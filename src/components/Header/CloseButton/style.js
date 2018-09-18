import styled from 'styled-components';

const Container = styled.button`
    position: absolute;
    border: none;
    top: 0;
    right: 0;
    margin: 2.4rem;
    z-index: 10;
    font-size: 3.2rem;
    cursor: pointer;
    background-color: ${props => props.theme.colorPrimaryDark};
    color: ${props => props.theme.colorWhite};
`;

export default Container;
