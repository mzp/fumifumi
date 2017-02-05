import {fork} from "redux-saga/effects";
import author from "./author";
import fetch from "./fetch";

export default function *() {
    yield fork(fetch);
    yield fork(author);
}
