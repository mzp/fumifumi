/* @flow */
import {handleActions} from "redux-actions";
import flatMap from "lodash.flatmap";
import find from "lodash.find";

export default handleActions({
    "@@INIT": (state) => state,

    "magazine.list.fetch": (state, {payload}) => {
        const xs = flatMap(payload, ({episodes}) => episodes);
        const next = find(xs, ({id}) => id === state.id);

        return next || {};
    },

    "magazine.list.show": (state, action) => action.payload
}, {});
