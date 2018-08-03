import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerLogoIcon, Container } from './style';
import NavLinks from './NavLinks/NavLinks';
import Logo from './Logo/Logo';
import Button from './Button/Button';

class Header extends React.Component {
  constructor({ props }) {
    super(props);

    this.state = {
      toogle: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log(this.state.toogle);
    this.setState({ toogle: !this.state.toogle });
  }

  render() {
    return (
      <Container>
        <ContainerLogoIcon>
          <Link to="/">
            <Logo />
          </Link>
          <Button handleClick={this.handleClick} />
        </ContainerLogoIcon>
        <NavLinks toogle={this.state.toogle} props={this.props} />
      </Container>
    );
  }
}

export default Header;
