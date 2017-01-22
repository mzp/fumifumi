/* @flow */
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import magazine from "./magazine";
import episode from "./episode";
import layout from "./layout";

export default combineReducers({
    episode,
    layout,
    magazine,
    "routing": routerReducer
});
