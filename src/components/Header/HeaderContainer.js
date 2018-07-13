import React from 'react';

import Header from './Header';
import { Container } from './style';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toogle: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ toogle: !this.state.toogle });
  }

  render() {
    return (
      <Container>
        <Header
          {...this.props}
          {...this.state}
          handleClick={this.handleClick}
        />
      </Container>
    );
  }
}

export default HeaderContainer;
