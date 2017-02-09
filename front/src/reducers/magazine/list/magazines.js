import reduceRudecers from "reduce-reducers";
import {handleActions} from "redux-actions";
import action from "actions/magazine/list";
import valueStore from "reducers/lib/value-store";

const base = valueStore("magazine.list.fetch", []);

const extend = handleActions({[action.fetchNext]: (state, {payload}) => [...state, ...payload]}, []);

export default reduceRudecers(base, extend);
