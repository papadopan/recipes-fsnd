import axios from "axios";

// actions
export const FETCH_CATEGORY_REQUEST = "FETCH_CATEGORY_REQUEST";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_FAIL = "FETCH_CATEGORY_FAIL";

export function fetchCategoryRequest() {
  return {
    type: FETCH_CATEGORY_REQUEST,
  };
}

export function fetchCategorySuccess(categories) {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: categories,
  };
}

export function fetchCategoryFail(error) {
  return {
    type: FETCH_CATEGORY_FAIL,
    payload: error,
  };
}

export const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoryRequest());

  try {
    const response = await axios({
      method: "get",
      url: "http://127.0.0.1:5000/api/category",
    });
    dispatch(fetchCategorySuccess(response.data.result));
  } catch (error) {
    dispatch(fetchCategoryFail(error));
  }
};
