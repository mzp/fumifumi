/* @flow */
import {handleActions} from "redux-actions";

export default handleActions({
    "@@INIT": (state) => state,
    "magazine.list.show": (state, action) => action.payload
}, {});
