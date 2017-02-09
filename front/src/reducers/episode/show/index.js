/* @flow */
import {combineReducers} from "redux";
import pages from "./pages";
import info from "./info";
import action from "actions/episode/show";
import valueStore from "reducers/lib/value-store";
import boolStore from "reducers/lib/bool-store";

export default combineReducers({
    "episode": valueStore(action.fetch, {}),
    info,
    pages,
    "ready": boolStore([action.fetch], [action.start], false)
});
