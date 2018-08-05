import { LOGIN, REGISTER, LOGOUT } from '../actions/index';

const authentication = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        reduxIsAuthenticated: true
      };
    case REGISTER:
      return {
        ...state,
        reduxIsAuthenticated: true
      };
    case LOGOUT:
      return { ...state, reduxIsAuthenticated: false };
    default:
      return state;
  }
};

export default authentication;
