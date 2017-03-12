/* @flow */
import createAction from "actions/lib/create-action";
import resourceAction from "actions/lib/resource-action";
import api from "api/episode/fetch";

const action = createAction("episode.show");

export default {
    "show": action("show"),
    ...resourceAction(api, action)
};
