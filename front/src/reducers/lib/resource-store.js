import {combineReducers} from "redux";
import boolStore from "reducers/lib/bool-store";
import valueStore from "reducers/lib/value-store";

export default function (action) {
    return combineReducers({
        "data": valueStore(action.fetchData, []),
        "fetching": boolStore([action.start], [action.fetchData], false),
        "hasMore": valueStore(action.hasMore, false),
        "ready": boolStore([action.fetchData], [], false)
    });
}
