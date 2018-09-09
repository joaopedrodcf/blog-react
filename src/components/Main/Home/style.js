import styled from 'styled-components';

export const ContainerPages = styled.div`
    background-color: ${props => props.theme.colorPrimaryDark};
    box-shadow: 0 2px 4px ${props => props.theme.colorBlack};
    padding: 10px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${props => props.theme.colorWhite};

    > h1 {
        text-align: center;
    }
`;

export const PaginationButton = styled.button`
    background: none;
    border: none;
    color: ${props =>
        props.active ? props.theme.colorPrimary : props.theme.colorWhite};
    border-bottom: 4px solid transparent;
    margin: 5px;
    ${props =>
        props.active &&
        `border-bottom: 4px solid ${props.theme.colorPrimary};`};

    &:hover {
        color: ${props => props.theme.colorPrimary};
        border-bottom: 4px solid ${props => props.theme.colorPrimary};
    }
`;
