/* @flow */
import {combineReducers} from "redux";
import info from "./info";
import action from "actions/episode/show";
import resourceStore from "reducers/lib/resource-store";

export default combineReducers({
    info,
    "resource": resourceStore(action)
});
