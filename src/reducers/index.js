import { LOGIN, REGISTER, LOGOUT } from '../actions/index';

const authentication = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        reduxIsAuthenticated: !!localStorage.getItem('token')
      };
    case REGISTER:
      return {
        ...state,
        reduxIsAuthenticated: !!localStorage.getItem('token')
      };
    case LOGOUT:
      return {
        ...state,
        reduxIsAuthenticated: !!localStorage.getItem('token')
      };
    default:
      return state;
  }
};

export default authentication;
