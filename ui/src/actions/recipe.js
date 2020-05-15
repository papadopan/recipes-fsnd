import axios from "axios";

// cook types

export const RECIPES_REQUEST = "RECIPES_REQUEST";
export const RECIPES_SUCCESS = "RECIPES_SUCCESS";
export const RECIPE_SUCCESS = "RECIPE_SUCCESS";
export const RECIPES_FAIL = "RECIPES_FAIL";

// cook functions
export function recipesRequest() {
  return {
    type: RECIPES_REQUEST,
  };
}

export function recipesSuccess(recipes) {
  return {
    type: RECIPES_SUCCESS,
    payload: recipes,
  };
}

export function recipeSuccess(recipes) {
  return {
    type: RECIPE_SUCCESS,
    payload: recipes,
  };
}

export function recipesFail(error) {
  return {
    type: RECIPES_FAIL,
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

export const getRecipeById = (id) => async (dispatch) => {
  // start recipe request
  dispatch(recipesRequest());
  try {
    const response = await axios({
      method: "get",
      url: `http://127.0.0.1:5000/api/recipe/${id}`,
    });
    dispatch(recipeSuccess(response.data.result));
  } catch (error) {
    dispatch(recipesFail(error));
  }
};
