/* @flow */
import createAction from "actions/lib/create-action";

const action = createAction("episode.show");

export default {
    "fetch": action("fetch"),
    "show": action("show"),
    "start": action("start")
};
