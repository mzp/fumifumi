/* @flow */
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import magazine from "./magazine";


export default combineReducers({
    magazine,
    "routing": routerReducer
});
