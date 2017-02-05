/* @flow */
import {combineReducers} from "redux";
import author from "./author";
import show from "./show";

export default combineReducers({
    author,
    show
});
