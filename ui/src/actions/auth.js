import jwt_decode from "jwt-decode";

// action types

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

// action functions

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess(permissions, token) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      permissions,
      token,
    },
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
}

// function available to the app
export const loginUser = (token) => {
  return function (dispatch) {
    // send login request
    dispatch(loginRequest());

    let permissions = jwt_decode(token).permissions;

    dispatch(loginSuccess(token));
    dispatch(loginSuccess(permissions, token));
  };
};
