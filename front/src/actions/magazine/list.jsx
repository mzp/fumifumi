/* @flow */
import {createAction} from "redux-actions";

export default {
    "fetch": createAction("magazine.list.fetch"),
    "show": createAction("magazine.list.show"),
    "start": createAction("magazine.list.start")
};
