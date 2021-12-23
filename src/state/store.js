import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";
//uso thunk per aiutare redux a gestire le chiamate asincrone
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)