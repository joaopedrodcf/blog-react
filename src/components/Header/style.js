import styled from 'styled-components';

export const Container = styled.header`
    align-items: center;
    background-color: ${props => props.theme.colorPrimaryDark};
    background-position: center;
    background-size: cover;
    box-shadow: 0 2px 4px ${props => props.theme.colorGrayDark};
    display: flex;
    grid-area: header;
    justify-content: space-between;

    > nav {
        background-color: ${props => props.theme.colorPrimaryDark};
        z-index: 1;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: unset;
    }
`;

export const ContainerLogoIcon = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
`;
