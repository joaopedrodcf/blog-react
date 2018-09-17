import styled from 'styled-components';

const Container = styled.button`
    position: absolute;
    border: none;
    top: 0;
    right: 0;
    margin: 2.4rem;
    z-index: 10;
    background-color: ${props => props.theme.colorPrimaryDark};
`;

export default Container;
