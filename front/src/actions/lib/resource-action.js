import {createAction} from "redux-actions";

export default function (api, action) {
    const resource = {
        "fetchData": action("fetchData"),
        "hasMore": action("hasMore"),
        "start": action("start")
    };

    return {
        "fetch": createAction("saga.resource.fetch", () => ({
            api,
            resource
        })),
        ...resource
    };
}
