/* @flow */
import {handleActions} from "redux-actions";

export default (type, init) => handleActions({
    "@@INIT": (state) => state,
    [type]: (state, action) => action.payload
}, init);
