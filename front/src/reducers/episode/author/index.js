/* @flow */
import {combineReducers} from "redux";
import action from "actions/episode/author";
import valueStore from "reducers/lib/value-store";
import boolStore from "reducers/lib/bool-store";

export default combineReducers({
    "episodes": valueStore(action.fetch, []),
    "ready": boolStore([action.fetch], [action.start], false)
});
