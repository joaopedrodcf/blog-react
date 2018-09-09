import styled from 'styled-components';

const Container = styled.button`
    background: none;
    border: none;
    display: none;

    @media (max-width: 600px) {
        display: unset;
        color: ${props => props.theme.colorWhite};
        padding: 5px 5px;
    }
`;

export default Container;
