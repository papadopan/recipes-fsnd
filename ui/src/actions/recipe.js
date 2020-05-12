import axios from "axios";

// cook types

export const RECIPE_REQUEST = "RECIPE_REQUEST";
export const RECIPE_SUCCESS = "RECIPE_SUCCESS";
export const RECIPE_FAIL = "RECIPE_FAIL";

// cook functions
export function recipesRequest() {
  return {
    type: RECIPE_REQUEST,
  };
}

export function recipesSuccess(recipes) {
  return {
    type: RECIPE_SUCCESS,
    payload: recipes,
  };
}

export function recipesFail(error) {
  return {
    type: RECIPE_FAIL,
    payload: error,
  };
}

// access functions
export const getAllRecipes = () => async (dispatch) => {
  // start the request
  dispatch(recipesRequest());

  try {
    // send the get requests
    const response = await axios.get("http://127.0.0.1:5000/api/recipe");
    dispatch(recipesSuccess(response.data.result));
  } catch (error) {
    // dispatch if fail
    dispatch(recipesFail(error));
  }
};
