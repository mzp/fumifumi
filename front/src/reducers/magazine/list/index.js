/* @flow */
import {combineReducers} from "redux";
import selectedEpisode from "./selected-episode";
import magazines from "./magazines";
import boolStore from "reducers/lib/bool-store";

export default combineReducers({
    "fetching": boolStore(["magazine.list.start"], ["magazine.list.fetch"], false),
    magazines,
    "ready": boolStore(["magazine.list.fetch"], [], false),
    selectedEpisode
});
