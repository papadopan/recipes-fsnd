import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import auth from './auth';
import recipe from './recipe'


const rootReducer = (history) => combineReducers({
    auth, 
    recipe,
    router: connectRouter(history)
});


export default rootReducer;




