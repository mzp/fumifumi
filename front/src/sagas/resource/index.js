import {fork} from "redux-saga/effects";
import fetch from "./fetch";
import clear from "./clear";

export default function *() {
    yield fork(fetch);
    yield fork(clear);
}
