/* @flow */
import {combineReducers} from "redux";
import selectedEpisode from "./selected-episode";
import magazines from "./magazines";
import boolStore from "reducers/lib/bool-store";
import valueStore from "reducers/lib/value-store";

export default combineReducers({
    "fetching": boolStore(["magazine.list.start"], ["magazine.list.fetch"], false),
    "hasMore": valueStore("magazine.list.has-more", false),
    magazines,
    "ready": boolStore(["magazine.list.fetch"], [], false),
    selectedEpisode
});
