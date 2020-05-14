import {
  COOKS_FAIL,
  COOKS_SUCCESS,
  COOKS_REQUEST,
  COOK_CREATE_FAIL,
  COOK_CREATE_REQUEST,
  COOK_CREATE_SUCCESS,
} from "../actions/cook";

const initialState = {
  cooks: [],
  loading: false,
  error: null,
};

function cookReducer(state = initialState, action) {
  switch (action.type) {
    case COOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        cooks: action.payload,
      };
    case COOKS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case COOK_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COOK_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case COOK_CREATE_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export default cookReducer;
