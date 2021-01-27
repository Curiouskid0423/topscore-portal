import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import coursesReducer from "../reducers/courses";
import contentReducer from "../reducers/content";
import filtersReducer from "../reducers/filters";
import utilReducer from "../reducers/utility";
import studentsReducer from "../reducers/students";

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
            content: contentReducer,
            courses: coursesReducer,
            filters: filtersReducer,
            students: studentsReducer,
            util: utilReducer,
        }),
        composeEnhancer(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export default launchStore;
