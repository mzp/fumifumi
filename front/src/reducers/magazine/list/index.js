/* @flow */
import {combineReducers} from "redux";
import selectedEpisode from "./selected-episode";
import magazines from "./magazines";
import ready from "./ready";

export default combineReducers({
    magazines,
    ready,
    selectedEpisode
});
