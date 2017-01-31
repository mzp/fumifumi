/* @flow */
import {combineReducers} from "redux";
import selectedEpisode from "./selected-episode";
import ready from "./ready";
import fetching from "./fetching";
import valueStore from "reducers/lib/value-store";

export default combineReducers({
    fetching,
    "magazines": valueStore("magazine.list.fetch", []),
    ready,
    selectedEpisode
});
