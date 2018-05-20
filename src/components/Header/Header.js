import React from 'react';
import Container from './style';
import NavLinks from './NavLinks/NavLinks';
import Logo from './Logo/Logo';

class Header extends React.Component {
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
        <Logo />
        <NavLinks />
      </Container>
    );
  }
}

export default Header;
