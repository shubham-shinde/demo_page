import { createStore , combineReducers , applyMiddleware, compose } from 'redux';
import updateReducer from "./reducers/index";
import thunk from "redux-thunk";
const reducer = combineReducers({
    updateReducer,
});
    
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;

