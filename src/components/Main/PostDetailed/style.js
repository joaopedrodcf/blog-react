import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 500px auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    grid-template-areas: 'figure figure figure' 'article article article';
    background-color: ${props => props.theme.colorPrimaryDark};
    box-shadow: 0 2px 4px ${props => props.theme.colorBlack};
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius: 2px;

    @media (max-width: 900px) {
        grid-template-rows: 1fr auto;
    }
`;

export const FigureContainer = styled.div`
    grid-area: figure;
`;

export const Figure = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 2px 4px ${props => props.theme.colorBlack};
`;

export const Article = styled.div`
    grid-area: article;

    > * {
        margin: 0;
    }

    > h1 {
        margin-bottom: 4px;
        color: ${props => props.theme.colorPrimary};
    }

    > h2 {
        margin-bottom: 5%;
        color: ${props => props.theme.colorPrimaryLight};
    }

    > p {
        text-align: justify;
        color: ${props => props.theme.colorWhite};
    }
`;
