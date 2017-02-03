/* @flow */
import {combineActions, handleActions} from "redux-actions";

function next (types: string[], value: boolean) {
    if (types.length === 0) {
        return {};
    }

    return {[combineActions(...types)]: () => value};
}

export default (enableTypes: array[], disableTypes: array[], init: boolean) => handleActions({
    "@@INIT": (state) => state,
    ...next(enableTypes, true),
    ...next(disableTypes, false)
}, init);
