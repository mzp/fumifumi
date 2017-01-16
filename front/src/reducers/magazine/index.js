/* @flow */
import {combineReducers} from "redux";
import import_ from "./import";
import list from "./list";

export default combineReducers({
    import_,
    list
});
