import styled from 'styled-components';

const Wrapper = styled.button`
    margin: 10px 10px;
    border: none;
    padding: 15px 32px;
    border-radius: 2px;
    background-color: ${props => props.theme.colorWhite};

    &:hover {
        background-color: ${props => props.theme.colorGrayDark};
    }
`;

export default Wrapper;
