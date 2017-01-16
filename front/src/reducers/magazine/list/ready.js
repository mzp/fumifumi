/* @flow */
import {handleActions} from "redux-actions";

export default handleActions({
    "@@INIT": (state) => state,
    "magazine.list.fetch": () => true,
    "magazine.list.start": () => false
}, false);
