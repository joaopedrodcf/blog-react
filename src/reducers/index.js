import actionTypes from '../actions/actionsTypes';

const authentication = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        reduxIsAuthenticated: true,
        email: action.payload.email
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state
      };
    case actionTypes.REGISTER_START:
      return {
        ...state
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        reduxIsAuthenticated: true,
        email: action.payload.email
      };
    case actionTypes.REGISTER_ERROR:
      return {
        ...state
      };
    case actionTypes.LOGOUT_START:
      return {
        ...state
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        reduxIsAuthenticated: false
      };
    case actionTypes.LOGOUT_ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default authentication;
