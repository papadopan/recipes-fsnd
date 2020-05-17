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

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
}

// function available to the app
export const loginUser = (permissions) => {
  return function (dispatch) {
    // send login request
    dispatch(loginRequest());
    let type = "simple";
    if (permissions && permissions.length > 0) {
      type = permissions.split(":")[1];
    }

    dispatch(loginSuccess(type));
  };
};
