import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerLogoIcon, Container } from './style';
import NavLinks from './NavLinks/NavLinks';
import Logo from './Logo/Logo';
import Button from './Button/Button';
import HeaderMobile from './HeaderMobile/HeaderMobile';

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
        const { toogle } = this.state;

        this.setState({ toogle: !toogle });
    }

    render() {
        const { toogle } = this.state;
        return (
            <Container>
                <ContainerLogoIcon>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <Button handleClick={this.handleClick} />
                </ContainerLogoIcon>
                <NavLinks toogle={toogle} {...this.props} />
                <HeaderMobile />
            </Container>
        );
    }
}

export default Header;
