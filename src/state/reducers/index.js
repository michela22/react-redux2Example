//qui combino tutti i miei reducers
import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
    account: accountReducer
});

export default reducers;

