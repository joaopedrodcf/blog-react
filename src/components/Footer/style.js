import styled from 'styled-components';

const Container = styled.footer`
    grid-area: footer;
    background-color: ${props => props.theme.colorPrimaryDark};
    box-shadow: 0 2px 4px ${props => props.theme.colorGrayDark};
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colorWhite};
`;

export default Container;
