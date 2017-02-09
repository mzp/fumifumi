/* @flow */
import {handleActions} from "redux-actions";
import flatMap from "lodash.flatmap";
import find from "lodash.find";
import action from "actions/magazine/list";

export default handleActions({
    "@@INIT": (state) => state,

    [action.fetch]: (state, {payload}) => {
        const xs = flatMap(payload, ({episodes}) => episodes);
        const next = find(xs, ({id}) => id === state.id);

        return next || {};
    },

    [action.show]: (state, {payload}) => payload
}, {});
