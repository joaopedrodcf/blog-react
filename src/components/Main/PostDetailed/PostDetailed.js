import React from 'react';
import axios from 'axios';

import { Container, Article, Figure, FigureContainer } from './style';

export default class PostDetailed extends React.Component {
  // This type of constructor is useful basically is doing {match} = this.props.match
  constructor(props) {
    super(props);

    this.state = {
      post: []
    };

    this.getPost = this.getPost.bind(this);

    this.endpoint = '/api/post/';
    this.url = process.env.REACT_APP_API_HOST + this.endpoint;
  }

  componentDidMount() {
    this.getPost();
  }

  getPost() {
    const { id } = this.props.match.params;

    axios.get(this.url + id).then(response => {
      this.setState({
        post: response.data
      });
    });
  }

  //  return <div>I'm the post details {this.state.id}</div>;
  render() {
    const post = Object.assign({}, this.state.post);

    const { title, date, text, image } = post;

    return (
      <Container>
        <Article>
          <h3>{title}</h3>
          <h4>{date}</h4>
          <p>{text}</p>
        </Article>
        <FigureContainer>
          <Figure src={image} alt="about-me-img" />
        </FigureContainer>
      </Container>
    );
  }
}
