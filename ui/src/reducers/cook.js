import { COOKS_FAIL, COOKS_SUCCESS, COOKS_REQUEST } from "../actions/cook";

const initialState = {
  cooks: [],
  loading: false,
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
    default:
      return state;
  }
}

export default cookReducer;
