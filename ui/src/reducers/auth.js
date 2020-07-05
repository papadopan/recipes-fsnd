import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  INIT_USER_SUCCESS,
  INIT_USER_REQUEST,
} from "../actions/auth";

const initialState = {
  loading: false,
  loging_loading: false,
  error: null,
  loggedin: false,
  emailSent: false,
  user: null,
  token: localStorage.getItem("cookbook_loggedin"),
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loging_loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loging_loading: false,
        access: action.payload.access,
        refresh: action.payload.refresh,
        user: action.payload.user,
        loggedin: true,
        token: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loging_loading: false,
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

    case INIT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case INIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
