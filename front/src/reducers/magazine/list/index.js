/* @flow */
import {combineReducers} from "redux";
import selectedEpisode from "./selected-episode";
import magazines from "./magazines";
import ready from "./ready";
import fetching from "./fetching";

export default combineReducers({
    fetching,
    magazines,
    ready,
    selectedEpisode
});
