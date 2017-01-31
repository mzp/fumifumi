/* @flow */
import {handleActions} from "redux-actions";

export default handleActions({
    "@@INIT": (state) => state,
    "layout.float.hide": () => false,
    "layout.float.toggle": (state) => !state
}, false);
