import React from 'react';
import { PropTypes } from 'prop-types';

import {
    Container,
    Article,
    Button,
    Figure,
    LinkPost,
    FigureContainer
} from './style';

const formatDate = date => new Date(date).toDateString();

const Post = ({ _id, title, date, description, image }) => (
    <Container>
        <Article>
            <h2>{title}</h2>
            <h4>{formatDate(date)}</h4>
            <p>{description}</p>
        </Article>
        <FigureContainer>
            <Figure src={image} alt="about-me-img" />
        </FigureContainer>

        <LinkPost to={`/post/${_id}`}>
            <Button>Read more</Button>
        </LinkPost>
    </Container>
);

Post.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Post;
