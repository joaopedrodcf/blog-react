import styled from 'styled-components';

const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.blue.dark};
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    ${props => !props.toogle && 'display: none;'};
`;

export default Wrapper;
