import {combineActions, handleActions} from "redux-actions";

function next (types, value) {
    if (types.length === 0) {
        return {};
    }

    return {[combineActions(...types)]: () => value};
}

export default (enableTypes, disableTypes, init) => handleActions({
    "@@INIT": (state) => state,
    ...next(enableTypes, true),
    ...next(disableTypes, false)
}, init);
