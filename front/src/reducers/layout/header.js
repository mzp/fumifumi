/* @flow */
import {handleActions} from "redux-actions";

export default handleActions({
    "@@INIT": (state) => state,
    "layout.header.hide": () => false,
    "layout.header.toggle": (state) => !state
}, false);
