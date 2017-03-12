import {combineReducers} from "redux";
import action from "actions/episode/magazine";
import resourceStore from "reducers/lib/resource-store";

export default combineReducers({"resource": resourceStore(action)});
