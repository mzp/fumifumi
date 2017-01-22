/* @flow */
import {handleActions} from "redux-actions";

export default handleActions({
    "@@INIT": (state) => state,

    "episode.show.fetch": (state, {payload}) =>
          payload.pages
}, []);
