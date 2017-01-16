import {fork} from "redux-saga/effects";
import import_ from "./import";
import list from "./list";

export default function *() {
    yield fork(import_);
    yield fork(list);
}
