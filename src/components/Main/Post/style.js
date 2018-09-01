import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 175px 3fr 1fr;
    grid-template-columns: 2fr 2fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    grid-template-areas: 'figure article article' 'figure article article' 'figure . button';
    background-color: rgba(27, 152, 224, 0.4);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

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
        color: rgba(33, 37, 41, 1);
        font-size: 1.5em;
    }

    > h4 {
        margin-bottom: 5%;
        color: rgba(33, 37, 41, 0.7);
        font-size: 1.3em;
    }

    > p {
        text-align: justify;
        color: rgba(33, 37, 41, 1);
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    border: none;
    background-color: rgba(27, 152, 224, 0.5);
    padding: 10px 15px;

    &:hover {
        transform: scale(1.04);
        background-color: rgba(27, 152, 224, 0.9);
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
