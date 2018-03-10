import { createStore , combineReducers , applyMiddleware } from 'redux';
import updateReducer from "./reducers/index";
import filebarReducer from "./reducers/filebar";
import thunk from "redux-thunk";

const reducer = combineReducers({
    updateReducer,
    filebarReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;

