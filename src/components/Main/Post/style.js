import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 3fr 3fr 1fr;
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  grid-template-areas: 'figure article article' 'figure article article' 'figure . button';
  background-color: rgba(27, 152, 224, 0.4);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Figure = styled.img`
  grid-area: figure;
  max-width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Article = styled.div`
  grid-area: article;

  > * {
    margin: 0;
  }

  > h3 {
    margin-bottom: 4px;
  }

  > h4 {
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
  grid-area: button;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px 2px;
`;
