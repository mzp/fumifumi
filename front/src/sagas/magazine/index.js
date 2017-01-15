import {fork} from "redux-saga/effects";
import import_ from "./import";

export default function *() {
    yield fork(import_);
}
