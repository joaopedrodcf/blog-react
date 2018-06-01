import React from 'react';

import {
  Container,
  Article,
  Button,
  Figure,
  LinkPost,
  FigureContainer
} from './style';

const Post = ({ id, title, date, description, image }) => (
  <Container>
    <Article>
      <h3>{title}</h3>
      <h4>{date}</h4>
      <p>{description}</p>
    </Article>
    <FigureContainer>
      <Figure src={image} alt="about-me-img" />
    </FigureContainer>

    <LinkPost to={`/post/${id}`}>
      <Button>Read more</Button>
    </LinkPost>
  </Container>
);

export default Post;
