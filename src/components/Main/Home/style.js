import styled from 'styled-components';

export const ContainerPages = styled.div`
    background-color: rgba(27, 152, 224, 0.4);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    text-align: center;

    > h1 {
        text-align: center;
    }
`;

export const PaginationButton = styled.button`
    background: none;
    border: none;
    color: white;
    border-bottom: 4px solid transparent;
    margin: 5px;
    ${props => props.active && 'color: black;border-bottom: 4px solid black;'};

    &:hover {
        color: black;
        border-bottom: 4px solid black;
    }
`;
