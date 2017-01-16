/* @flow */
import {combineReducers} from "redux";
import magazines from "./magazines";
import ready from "./ready";

export default combineReducers({
    magazines,
    ready
});
