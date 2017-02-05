/* @flow */
import {combineReducers} from "redux";
import author from "./author";
import magazine from "./magazine";
import show from "./show";

export default combineReducers({
    author,
    magazine,
    show
});
