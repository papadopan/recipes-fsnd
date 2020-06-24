import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "../actions/auth";

const initialState = {
  loading: false,
  error: null,
  loggedin: false,
  emailSent: false,
  token: localStorage.getItem("loggedIn"),
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
        token: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        emailSent: action.payload,
      };
    case SIGNUP_ERROR:
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
