/* @flow */
import {combineReducers} from "redux";
import ready from "./ready";
import episode from "./episode";
import pages from "./pages";

export default combineReducers({
    episode,
    pages,
    ready
});
