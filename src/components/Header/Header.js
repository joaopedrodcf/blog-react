import React from 'react';
import { Container, ContainerLogoIcon } from './style';
import NavLinks from './NavLinks/NavLinks';
import Logo from './Logo/Logo';
import Button from './Button/Button';

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
        <ContainerLogoIcon>
          <Logo />
          <Button handleClick={this.handleClick} />
        </ContainerLogoIcon>
        <NavLinks {...this.props} {...this.state} />
      </Container>
    );
  }
}

export default Header;
