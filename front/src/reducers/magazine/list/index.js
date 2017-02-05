/* @flow */
import {combineReducers} from "redux";
import selectedEpisode from "./selected-episode";
import valueStore from "reducers/lib/value-store";
import boolStore from "reducers/lib/bool-store";

export default combineReducers({
    "fetching": boolStore(["magazine.list.start"], ["magazine.list.fetch"], false),
    "magazines": valueStore("magazine.list.fetch", []),
    "ready": boolStore(["magazine.list.fetch"], [], false),
    selectedEpisode
});
