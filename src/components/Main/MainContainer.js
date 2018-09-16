import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Main from './Main';
import { login, register } from '../../actions';

const mapStateToProps = ({ reduxIsAuthenticated, email }, ownProps) => ({
    reduxIsAuthenticated,
    email,
    ownProps
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => {
        dispatch(login(email, password));
    },
    register: (email, password) => {
        dispatch(register(email, password));
    }
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
);
