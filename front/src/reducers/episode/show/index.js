/* @flow */
import {combineReducers} from "redux";
import pages from "./pages";
import info from "./info";
import valueStore from "reducers/lib/value-store";
import boolStore from "reducers/lib/bool-store";

export default combineReducers({
    "episode": valueStore("episode.show.fetch", {}),
    info,
    pages,
    "ready": boolStore(["episode.show.fetch"], ["episode.show.start"], false)
});
