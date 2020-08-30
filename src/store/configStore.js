import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import utilReducer from "../reducers/utility";
import studentsReducer from "../reducers/studentsReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * With combineReducers,
 * each reducer is in charge of ONE entry in the state object.
 * @return a store object that keeps track of the state object CONSTANTLY,
 * and not just the time it is created.
 */
const launchStore = () => {
    return createStore(
        combineReducers({
            auth: authReducer,
            students: studentsReducer,
            util: utilReducer,
        }),
        composeEnhancer(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export default launchStore;
