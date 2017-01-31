/* @flow */
import {combineReducers} from "redux";
import ready from "./ready";
import pages from "./pages";
import info from "./info";
import valueStore from "reducers/lib/value-store";

export default combineReducers({
    "episode": valueStore("episode.show.fetch", {}),
    info,
    pages,
    ready
});
