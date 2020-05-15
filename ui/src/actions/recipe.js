import axios from "axios";

// cook types

export const RECIPES_REQUEST = "RECIPES_REQUEST";
export const RECIPES_SUCCESS = "RECIPES_SUCCESS";
export const RECIPE_SUCCESS = "RECIPE_SUCCESS";
export const RECIPES_FAIL = "RECIPES_FAIL";

export const CREATE_RECIPE_REQUEST = "CREATE_RECIPE_REQUEST";
export const CREATE_RECIPE_SUCCESS = "CREATE_RECIPE_SUCCESS";
export const CREATE_RECIPE_FAIL = "CREATE_RECIPE_FAIL";

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

export function addRecipeRequest() {
  return {
    type: CREATE_RECIPE_REQUEST,
  };
}
export function addRecipeSuccess(recipe) {
  return {
    type: CREATE_RECIPE_SUCCESS,
    payload: recipe,
  };
}
export function addRecipeFail(error) {
  return {
    type: CREATE_RECIPE_FAIL,
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

export const addRecipe = (recipe) => async (dispatch) => {
  // init the request
  dispatch(addRecipeRequest());

  console.log("0000000000", recipe);

  recipe.cook_id = 1;
  recipe.category_id = 1;

  delete recipe.category;

  try {
    const response = await axios({
      method: "post",
      url: "http://127.0.0.1:5000/api/recipe",
      data: recipe,
    });
    dispatch(addRecipeSuccess(response.data.recipe));
  } catch (error) {
    dispatch(addRecipeFail(error));
  }
};
