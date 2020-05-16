import {
  RECIPES_REQUEST,
  RECIPES_SUCCESS,
  RECIPES_FAIL,
  RECIPE_SUCCESS,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_FAIL,
  UPDATE_RECIPE_REQUEST,
} from "../actions/recipe";

const initialState = {
  loading: true,
  recipes: [],
  recipe: null,
  error: null,
  categories: [],
};

function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case RECIPES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: action.payload,
      };
    case RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        recipe: action.payload,
      };
    case RECIPES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        recipe: action.payload,
      };

    case UPDATE_RECIPE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default recipeReducer;
