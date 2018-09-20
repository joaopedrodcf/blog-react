import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 500px auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: ${props => props.theme.space.md};
    padding: ${props => props.theme.space.md};
    grid-template-areas: 'figure figure figure' 'article article article';
    background-color: ${props => props.theme.color.blue.dark};
    box-shadow: ${props => props.theme.shadow};
    margin: ${props => props.theme.space.lg} 0;
    border-radius: ${props => props.theme.space.xs};

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
    box-shadow: ${props => props.theme.shadow};
`;

export const Article = styled.div`
    grid-area: article;

    > * {
        margin: 0;
    }

    > h1 {
        margin-bottom: ${props => props.theme.space.xs};
        color: ${props => props.theme.color.blue.default};
    }

    > h4 {
        margin-bottom: ${props => props.theme.space.xl};
        color: ${props => props.theme.color.blue.light};
    }

    > p {
        text-align: justify;
        color: ${props => props.theme.color.white};
    }
`;
