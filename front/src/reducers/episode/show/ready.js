/* @flow */
import {handleActions} from "redux-actions";

export default handleActions({
    "@@INIT": (state) => state,
    "episode.show.fetch": () => true,
    "episode.show.start": () => false
}, false);
