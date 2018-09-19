import React from 'react';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import TestHeader from './Header/Header';

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
            <React.Fragment>
                <TestHeader handleClick={this.handleClick} {...this.props} />
                <HeaderMobile
                    handleClick={this.handleClick}
                    toogle={toogle}
                    {...this.props}
                />
            </React.Fragment>
        );
    }
}

export default Header;
