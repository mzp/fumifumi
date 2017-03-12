/* @flow */
import {combineReducers} from "redux";
import action from "actions/episode/author";
import resourceStore from "reducers/lib/resource-store";

export default combineReducers({"resource": resourceStore(action)});
