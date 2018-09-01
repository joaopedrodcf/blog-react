/* eslint-disable no-underscore-dangle */
import React from 'react';
import axios from 'axios';

import Post from '../Post/Post';
import { ContainerPages, PaginationButton } from './style';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            currentPage: 1,
            totalPages: 3
        };

        this.getPostsPagination = this.getPostsPagination.bind(this);

        this.endpoint = '/api/posts/';
        this.url = process.env.REACT_APP_API_HOST + this.endpoint;
    }

    componentDidMount() {
        this.getPostsPagination(1);
    }

    getPostsPagination(page, isMinus, isPlus) {
        const { currentPage } = this.state;

        let curPage = page;

        if (isMinus) {
            curPage = currentPage - 1;
        } else if (isPlus) {
            curPage = currentPage + 1;
        }

        axios.get(this.url + curPage).then(response => {
            this.setState({
                currentPage: curPage,
                posts: response.data.posts,
                totalPages: response.data.pages
            });
        });
    }

    render() {
        const { posts, currentPage, totalPages } = this.state;

        const buttons = [];

        for (let i = 1; i < totalPages + 1; i += 1) {
            if (currentPage === i) {
                buttons.push(
                    <PaginationButton
                        key={i}
                        onClick={() => this.getPostsPagination(i, false, false)}
                        active
                    >
                        {i}
                    </PaginationButton>
                );
            } else {
                buttons.push(
                    <PaginationButton
                        key={i}
                        onClick={() => this.getPostsPagination(i, false, false)}
                    >
                        {i}
                    </PaginationButton>
                );
            }
        }

        return (
            <div>
                {posts.map(post => <Post key={post._id} {...post} />)}

                <ContainerPages>
                    Page {currentPage} of {totalPages}
                    <div>
                        {currentPage - 1 > 0 && (
                            <PaginationButton
                                onClick={() =>
                                    this.getPostsPagination(0, true, false)
                                }
                            >
                                Previous
                            </PaginationButton>
                        )}
                        {buttons}
                        {currentPage < totalPages && (
                            <PaginationButton
                                onClick={() =>
                                    this.getPostsPagination(0, false, true)
                                }
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
