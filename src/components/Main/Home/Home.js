import React from 'react';
import Post from '../Post/Post';
import { ContainerPages, PaginationButton } from './style';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      postsPerPage: 2,
      currentPage: 1,
      totalPages: 3
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
        id: 1,
        title: 'This is my title',
        description:
          '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
        date: '24 Jan 2018'
      },
      {
        id: 2,
        title: 'This is my title',
        description:
          '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1516186049182-b29897c525d1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=efb3103964aaa561432d3d718ab94e50&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
        date: '24 Jan 2018'
      },
      {
        id: 3,
        title: 'This is my title',
        description:
          '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
        date: '24 Jan 2018'
      },
      {
        id: 4,
        title: 'This is my title',
        description:
          '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
        date: '24 Jan 2018'
      },
      {
        id: 5,
        title: 'This is my title',
        description:
          '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
        date: '24 Jan 2018'
      },
      {
        id: 6,
        title: 'This is my title',
        description:
          '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.Praesent quis risus id dolor venenatis condimentum.',
        image:
          'https://images.unsplash.com/photo-1525184648845-66cbe3b6c59c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1616770f130dedbdc3407e3aea3d6215&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
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
      if (currentPage === i) {
        buttons.push(
          <PaginationButton
            onClick={() => this.getPostsPagination(i, false, false)}
            active
          >
            {i}
          </PaginationButton>
        );
      } else {
        buttons.push(
          <PaginationButton
            onClick={() => this.getPostsPagination(i, false, false)}
          >
            {i}
          </PaginationButton>
        );
      }
    }

    return (
      <div>
        {posts.map(post => <Post {...post} />)}

        <ContainerPages>
          Page {currentPage} of {totalPages}
          <div>
            {currentPage - 1 > 0 && (
              <PaginationButton
                onClick={() => this.getPostsPagination(0, true, false)}
              >
                Previous
              </PaginationButton>
            )}
            {buttons}
            {currentPage < totalPages && (
              <PaginationButton
                onClick={() => this.getPostsPagination(0, false, true)}
              >
                Next
              </PaginationButton>
            )}
          </div>
        </ContainerPages>
      </div>
    );
  }
}
