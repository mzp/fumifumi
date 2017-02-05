/* @flow */
import {combineReducers} from "redux";
import valueStore from "reducers/lib/value-store";
import boolStore from "reducers/lib/bool-store";

export default combineReducers({
    "episodes": valueStore("episode.author.fetch", []),
    "ready": boolStore(["episode.author.fetch"], ["episode.author.start"], false)
});
