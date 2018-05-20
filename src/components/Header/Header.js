import React from 'react';
import Radium from 'radium';
import styles from './Header.style';
import NavLinks from './NavLinks';
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
      <header style={styles.header}>
        <Logo />
        <NavLinks />
      </header>
    );
  }
}

export default Radium(Header);
