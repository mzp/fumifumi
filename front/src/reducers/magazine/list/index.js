/* @flow */
import {combineReducers} from "redux";
import selectedEpisode from "./selected-episode";
import magazines from "./magazines";
import boolStore from "reducers/lib/bool-store";
import valueStore from "reducers/lib/value-store";
import action from "actions/magazine/list";

export default combineReducers({
    "fetching": boolStore([action.start], [action.fetch], false),
    "hasMore": valueStore(action.hasMore, false),
    magazines,
    "ready": boolStore([action.fetch], [], false),
    selectedEpisode
});
