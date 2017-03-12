import {combineReducers} from "redux";
import action from "actions/series/list";
import resourceStore from "reducers/lib/resource-store";

export default combineReducers({"resource": resourceStore(action)});
