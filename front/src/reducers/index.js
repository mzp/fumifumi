/* @flow */
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import magazineFiles from "./magazine-files";


export default combineReducers({
    magazineFiles,
    routing: routerReducer
});
