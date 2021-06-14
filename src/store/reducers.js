import { combineReducers } from "redux";
import Reducer from './amazon/reducer'
import UserReducer from './user/reducer'

const rootReducer = combineReducers({
    // public
    Reducer,
    UserReducer
});

export default rootReducer;
