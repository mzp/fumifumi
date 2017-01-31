/* @flow */
import {handleActions} from "redux-actions";

export default (type : string, init : *) => handleActions({
    "@@INIT": (state) => state,
    [type]: (state, action) => action.payload
}, init);
