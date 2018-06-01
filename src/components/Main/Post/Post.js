import React from 'react';

import { Container, Article, Button, Figure, LinkPost } from './style';

const Post = ({ id, title, date, description }) => (
  <Container>
    <Article>
      <h3>{title}</h3>
      <h4>{date}</h4>
      <p>{description}</p>
    </Article>
    <Figure
      src="https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
      alt="about-me-img"
    />
    <LinkPost to={`/post/${id}`}>
      <Button>Read more</Button>
    </LinkPost>
  </Container>
);

export default Post;
