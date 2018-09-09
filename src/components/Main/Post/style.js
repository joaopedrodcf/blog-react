import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 175px 3fr 1fr;
    grid-template-columns: 2fr 2fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    grid-template-areas: 'figure article article' 'figure article article' 'figure . button';
    background-color: ${props => props.theme.colorPrimaryDark};
    box-shadow: 0 2px 4px ${props => props.theme.colorBlack};
    margin-bottom: 20px;
    margin-top: 20px;

    @media (max-width: 900px) {
        grid-template-rows: auto 30px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'article article article' '. . button';
    }
`;

export const FigureContainer = styled.div`
    grid-area: figure;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const Figure = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 2px 4px ${props => props.theme.colorBlack};

    @media (max-width: 900px) {
        display: none;
    }
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

export const LinkPost = styled(Link)`
    grid-area: button;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

export const Button = styled.button`
    box-shadow: 0 2px 4px ${props => props.theme.colorBlack};
    border: none;
    background-color: ${props => props.theme.colorPrimary};
    padding: 10px 15px;

    &:hover {
        transform: scale(1.01);
        background-color: ${props => props.theme.colorPrimaryLight};
    }

    @media (max-width: 1800px) {
        font-size: 0.9em;
    }

    @media (max-width: 1200px) {
        font-size: 0.8em;
    }

    @media (max-width: 900px) {
        font-size: 0.7em;
    }
`;
