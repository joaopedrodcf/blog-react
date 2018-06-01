import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 500px auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  grid-template-areas: 'figure figure figure' 'article article article';
  background-color: rgba(27, 152, 224, 0.4);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
