import axios from "axios";
import { push } from "connected-react-router";

// action types

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

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
    payload: data,
  };
}
export function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    payload: error,
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
    localStorage.setItem("loggedIn", response.data.access_token);
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
