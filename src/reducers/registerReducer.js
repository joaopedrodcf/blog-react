import actionTypes from '../actions/actionsTypes';

const registerReducer = (state = [], action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default registerReducer;
