/* @flow */
import {createAction} from "redux-actions";

export default {
    "fetch": createAction("magazine.list.fetch"),
    "start": createAction("magazine.list.start")
};
