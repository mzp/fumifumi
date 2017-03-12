/* @flow */
import api from "api/episode/author";
import resourceAction from "actions/lib/resource-action";
import createAction from "actions/lib/create-action";

const action = createAction("episode.author");

export default {...resourceAction(api, action)};
