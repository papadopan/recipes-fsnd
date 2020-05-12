import { RECIPE_REQUEST, RECIPE_SUCCESS, RECIPE_FAIL } from "../actions/recipe";

const initialState = {
  loading: true,
  recipes: [],
  error: null,
};

function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: action.payload,
      };
    case RECIPE_FAIL:
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
