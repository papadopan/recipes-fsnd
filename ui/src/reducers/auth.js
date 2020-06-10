import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_REQUEST } from "../actions/auth";

const initialState = {
  loading: false,
  error: null,
  loggedin: false,
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
        access: action.payload.access,
        refresh: action.payload.refresh,
        loggedin: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
