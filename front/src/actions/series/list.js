import api from "api/series/fetch";
import resourceAction from "actions/lib/resource-action";
import createAction from "actions/lib/create-action";

const action = createAction("series.list");

export default {...resourceAction(api, action)};
