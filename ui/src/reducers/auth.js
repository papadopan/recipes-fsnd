import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_REQUEST } from "../actions/auth";

const initialState = {
  type: null,
  loggedin: false,
  loading: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        type: action.payload,
        loggedin: true,
      };
    default:
      return state;
  }
}

export default userReducer;
