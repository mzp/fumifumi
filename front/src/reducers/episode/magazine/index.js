/* @flow */
import {combineReducers} from "redux";
import valueStore from "reducers/lib/value-store";
import boolStore from "reducers/lib/bool-store";

export default combineReducers({
    "episodes": valueStore("episode.magazine.fetch.episodes", []),
    "magazine": valueStore("episode.magazine.fetch.magazine", []),
    "ready": boolStore(["episode.magazine.fetch.episodes"], ["episode.magazine.start"], false)
});
