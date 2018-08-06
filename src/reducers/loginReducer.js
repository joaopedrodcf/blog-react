import actionTypes from '../actions/actionsTypes';

const loginReducer = (state = [], action) => {
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
    default:
      return state;
  }
};

export default loginReducer;
