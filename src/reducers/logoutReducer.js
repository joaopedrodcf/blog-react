import actionTypes from '../actions/actionsTypes';

const logoutReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
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

export default logoutReducer;
