import React from 'react';
import Post from '../Post/Post';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      postsPerPage: 2,
      currentPage: 1,
      totalPages: 6
    };

    this.getPostsPagination = this.getPostsPagination.bind(this);
  }

  componentDidMount() {
    this.getPostsPagination(1);
  }

  getPostsPagination(page, isMinus, isPlus) {
    const { postsPerPage, currentPage } = this.state;

    let offset;

    let curPage = currentPage;

    if (isMinus) {
      curPage -= 1;
      offset = (currentPage - 2) * postsPerPage;
    } else if (isPlus) {
      curPage += 1;
      offset = currentPage * postsPerPage;
    } else {
      curPage = page;
      offset = (page - 1) * postsPerPage;
    }

    const posts = [
      {
        title: 'This is my title',
        description:
          '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      },
      {
        title: 'This is my title',
        description:
          '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      },
      {
        title: 'This is my title',
        description:
          '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      },
      {
        title: 'This is my title',
        description:
          '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      },
      {
        title: 'This is my title',
        description:
          '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      },
      {
        title: 'This is my title',
        description:
          '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      },
      {
        title: 'This is my title',
        description:
          '7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      },
      {
        title: 'This is my title',
        description:
          '8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      },
      {
        title: 'This is my title',
        description:
          '9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      },
      {
        title: 'This is my title',
        description:
          '10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      },
      {
        title: 'This is my title',
        description:
          '11 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      },
      {
        title: 'This is my title',
        description:
          '12 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        date: '24 Jan 2018'
      }
    ];

    this.setState({
      currentPage: curPage,
      posts: posts.slice(offset, offset + postsPerPage)
    });
  }

  render() {
    const { posts, currentPage, totalPages } = this.state;

    const buttons = [];

    for (let i = 1; i < totalPages + 1; i += 1) {
      buttons.push(
        <button onClick={() => this.getPostsPagination(i, false, false)}>
          {i}
        </button>
      );
    }

    return (
      <div>
        {posts.map(post => <Post {...post} />)}

        <div>
          Page {currentPage} of {totalPages}
        </div>

        {currentPage - 1 > 0 && (
          <button onClick={() => this.getPostsPagination(0, true, false)}>
            Previous
          </button>
        )}

        {buttons}

        {currentPage < totalPages && (
          <button onClick={() => this.getPostsPagination(0, false, true)}>
            Next
          </button>
        )}
      </div>
    );
  }
}
