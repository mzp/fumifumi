/* @flow */
import {combineReducers} from "redux";
import ready from "./ready";
import episode from "./episode";
import pages from "./pages";
import info from "./info";

export default combineReducers({
    episode,
    info,
    pages,
    ready
});
