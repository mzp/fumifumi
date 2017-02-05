/* @flow */
import createAction from "actions/lib/create-action";

const action = createAction("episode.magazine");

export default {
    "fetch": action("fetch"),
    "start": action("start")
};
