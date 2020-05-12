import axios from "axios";

// cook types

export const COOKS_REQUEST = "COOKS_REQUEST";
export const COOKS_SUCCESS = "COOKS_SUCCESS";
export const COOKS_FAIL = "COOKS_FAIL";

// cook functions
export function cooksRequest() {
  return {
    type: COOKS_REQUEST,
  };
}

export function cooksSuccess(cooks) {
  return {
    type: COOKS_SUCCESS,
    payload: cooks,
  };
}

export function cooksFail(error) {
  return {
    type: COOKS_FAIL,
    payload: error,
  };
}

// access functions
export const getAllCooks = () => async (dispatch) => {
  // start the request
  dispatch(cooksRequest());

  try {
    // send the get requests
    const response = await axios.get("http://127.0.0.1:5000/api/cook");
    dispatch(cooksSuccess(response.data.result));
  } catch (error) {
    // dispatch if fail
    dispatch(cooksFail(error));
  }
};
