/* @flow */
import {handleActions} from "redux-actions";

export default handleActions({
    "@@INIT": (state) => state,

    "magazine.list.fetch": (state, {payload}) =>
        payload
}, []);
