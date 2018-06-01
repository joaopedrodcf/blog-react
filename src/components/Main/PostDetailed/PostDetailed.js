import React from 'react';
import { Container, Article, Figure, FigureContainer } from './style';

export default class PostDetailed extends React.Component {
  // This type of constructor is useful basically is doing {match} = this.props.match
  constructor({ match }) {
    super();

    this.state = {
      id: match.params.id,
      post: []
    };

    this.getPost = this.getPost.bind(this);
  }

  componentDidMount() {
    this.getPost();
  }

  getPost() {
    const { id } = this.state;

    const posts = [
      {
        id: 1,
        title: 'This is my title',
        text:
          '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
        date: '24 Jan 2018'
      },
      {
        id: 2,
        title: 'This is my title',
        text:
          '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
        date: '24 Jan 2018'
      },
      {
        id: 3,
        title: 'This is my title',
        text:
          '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
        date: '24 Jan 2018'
      },
      {
        id: 4,
        title: 'This is my title',
        text:
          '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
        date: '24 Jan 2018'
      },
      {
        id: 5,
        title: 'This is my title',
        text:
          '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
        date: '24 Jan 2018'
      },
      {
        id: 6,
        title: 'This is my title',
        text:
          '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
        date: '24 Jan 2018'
      }
    ];

    this.setState({
      post: posts[id - 1]
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
