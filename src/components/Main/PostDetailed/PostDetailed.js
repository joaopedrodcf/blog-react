import React from 'react';
import PropTypes from 'prop-types';
import { Container, Article, Figure, FigureContainer } from './style';
import { getPost } from '../../../services/api';

const formatDate = date => new Date(date).toDateString();

class PostDetailed extends React.Component {
    // This type of constructor is useful basically is doing {match} = this.props.match
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            author: {}
        };

        this.getPost = this.getPost.bind(this);
    }

    componentDidMount() {
        this.getPost();
    }

    getPost() {
        const {
            match: {
                params: { id }
            }
        } = this.props;

        getPost(id).then(response => {
            this.setState({
                post: response.data,
                author: response.data.author
            });
            console.log(response.data);
        });
    }

    render() {
        const { post, author } = this.state;
        const { title, date, text, image } = post;
        const { email } = author;
        return (
            <Container>
                <Article>
                    <h1>{title}</h1>
                    <h2>
                        {email} {formatDate(date)}
                    </h2>
                    <p>{text}</p>
                </Article>
                <FigureContainer>
                    <Figure src={image} alt="about-me-img" />
                </FigureContainer>
            </Container>
        );
    }
}

PostDetailed.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({ id: PropTypes.number.isRequired })
    }).isRequired
};

export default PostDetailed;
