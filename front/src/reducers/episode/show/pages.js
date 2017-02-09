/* @flow */
import {handleActions} from "redux-actions";
import action from "actions/episode/show";

export default handleActions({
    "@@INIT": (state) => state,

    [action.fetch]: (state, {payload}) =>
          payload.pages
}, []);
