/* @flow */
import {combineReducers} from "redux";
import action from "actions/episode/magazine";
import valueStore from "reducers/lib/value-store";
import boolStore from "reducers/lib/bool-store";

export default combineReducers({
    "episodes": valueStore(action.fetchEpisodes, []),
    "magazine": valueStore(action.fetchMagazine, []),
    "ready": boolStore([action.fetchEpisodes], [action.start], false)
});
