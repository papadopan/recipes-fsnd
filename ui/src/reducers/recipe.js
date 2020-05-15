import {
  RECIPES_REQUEST,
  RECIPES_SUCCESS,
  RECIPES_FAIL,
  RECIPE_SUCCESS,
} from "../actions/recipe";

const initialState = {
  loading: true,
  recipes: [],
  recipe: null,
  error: null,
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
    default:
      return state;
  }
}

export default recipeReducer;
