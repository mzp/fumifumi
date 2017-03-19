import {createAction} from "redux-actions";

export default function (api, action) {
    const resource = {
        "fetchData": action("fetchData"),
        "hasMore": action("hasMore"),
        "notReady": action("notReady"),
        "start": action("start")
    };

    return {
        "clear": createAction("saga.resource.clear", () => ({resource})),
        "fetch": createAction("saga.resource.fetch", (...args) => ({
            "api": () => api(...args),
            resource
        })),
        ...resource
    };
}
