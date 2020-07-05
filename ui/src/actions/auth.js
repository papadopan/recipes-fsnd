import axios from "axios";
import { push } from "connected-react-router";

// action types

// login user
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

// signup user
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

// init current user
export const INIT_USER_REQUEST = "INIT_USER_REQUEST";
export const INIT_USER_SUCCESS = "INIT_USER_SUCCESS";
export const INIT_USER_FAIL = "INIT_USER_FAIL";

//logout user
export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAIL = "LOGOUT_USER_FAIL";

export function initUserRequest() {
  return {
    type: INIT_USER_REQUEST,
  };
}

export function initUserSuccess(data) {
  return {
    type: INIT_USER_SUCCESS,
    payload: data.user,
  };
}

export function initUserFail() {
  return {
    type: INIT_USER_FAIL,
  };
}
// action functions
export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      access: data.access_token,
      refresh: data.refresh_token,
      user: data.user,
    },
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
}

export function signupRequest() {
  return {
    type: SIGNUP_REQUEST,
  };
}
export function signupSuccess(data) {
  return {
    type: SIGNUP_SUCCESS,
    payload: data.user,
  };
}
export function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    payload: error,
  };
}

export function logoutRequest() {
  return {
    type: LOGOUT_USER_REQUEST,
  };
}
export function logoutSuccess() {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
}
export function logoutFail() {
  return {
    type: LOGOUT_USER_FAIL,
  };
}

// functions
//login user
export const loginUser = (data) => async (dispatch) => {
  //dispatch send request
  dispatch(loginRequest());

  try {
    const response = await axios({
      method: "post",
      url: `http://localhost:5000/api/login`,
      data: data,
    });

    dispatch(loginSuccess(response.data));
    localStorage.setItem("cookbook_loggedin", response.data.access_token);
    dispatch(push("/"));
  } catch (error) {
    dispatch(loginError(error.response.data));
  }
};

//signup user
export const signupUser = (data) => async (dispatch) => {
  dispatch(signupRequest());

  try {
    const response = await axios({
      method: "POST",
      url: `http://localhost:5000/api/signup`,
      data: data,
    });
    dispatch(signupSuccess(response.data.success));
  } catch (error) {
    dispatch(signupError(error.response.data));
  }
};

// init Current User
export const initCurrentUser = () => async (dispatch) => {
  // send request
  dispatch(initUserRequest());

  try {
    const response = await axios({
      method: "GET",
      url: "http://localhost:5000/api/me",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cookbook_loggedin")}`,
      },
    });

    dispatch(initUserSuccess(response.data));
  } catch (error) {
    dispatch(initUserFail());
    localStorage.removeItem("cookbook_loggedin");
    dispatch(push("/login"));
  }
};

// logout user

export const logoutUser = () => async (dispatch) => {
  // init request

  dispatch(logoutRequest());

  try {
    const response = await axios({
      method: "POST",
      url: `http://localhost:5000/api/logout`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cookbook_loggedin")}`,
      },
    });
    localStorage.removeItem("cookbook_loggedin");
    dispatch(push("/login"));
  } catch (error) {
    dispatch(logoutFail(error));
  }
};
