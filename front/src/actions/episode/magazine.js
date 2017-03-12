import api from "api/episode/magazine";
import resourceAction from "actions/lib/resource-action";
import createAction from "actions/lib/create-action";

const action = createAction("episode.magazine");

export default {...resourceAction(api, action)};
