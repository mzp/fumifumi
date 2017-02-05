/* @flow */
import {combineReducers} from "redux";
import valueStore from "reducers/lib/value-store";

export default combineReducers({"episodes": valueStore("episode.author.fetch", [])});
