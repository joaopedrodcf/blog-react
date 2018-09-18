import styled from 'styled-components';

const Wrapper = styled.button`
    background: none;
    border: none;
    display: none;
    font-size: 3.2rem;

    @media (max-width: 600px) {
        display: unset;
        color: ${props => props.theme.colorWhite};
        padding: 5px 5px;
    }
`;

export default Wrapper;
