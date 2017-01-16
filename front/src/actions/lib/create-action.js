import {createAction} from "redux-actions";

export default function (prefix) {
    return function action (name, ...args) {
        return createAction(`${prefix}.${name}`, ...args);
    };
}
