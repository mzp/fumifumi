import reduceRudecers from "reduce-reducers";
import {handleActions} from "redux-actions";
import valueStore from "reducers/lib/value-store";

const base = valueStore("magazine.list.fetch", []);

const extend = handleActions({
    "magazine.list.fetch-next": (state, action) => {
        const {payload} = action;

        return [...state, ...payload];
    }
}, []);

export default reduceRudecers(base, extend);
