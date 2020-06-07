import axios from "axios";
import { push } from "connected-react-router";

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
    dispatch(push("/recipe"));
  } catch (error) {
    dispatch(loginError(error.response.data));
  }
};
