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

    > h3 {
        margin-bottom: 4px;
        color: ${props => props.theme.colorPrimary};
        font-size: 1.5em;
    }

    > h4 {
        margin-bottom: 5%;
        color: ${props => props.theme.colorPrimaryLight};
        font-size: 1.3em;
    }

    > p {
        text-align: justify;
        color: ${props => props.theme.colorWhite};
        font-size: 1.1em;
    }

    @media (max-width: 1800px) {
        > h3 {
            font-size: 1.3em;
        }

        > h4 {
            font-size: 1.1em;
        }

        > p {
            font-size: 1em;
        }
    }

    @media (max-width: 1200px) {
        > h3 {
            font-size: 1.1em;
        }

        > h4 {
            font-size: 0.8em;
        }

        > p {
            font-size: 0.8em;
        }
    }
`;
