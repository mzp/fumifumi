import {fork} from "redux-saga/effects";
import author from "./author";
import fetch from "./fetch";
import magazine from "./magazine";

export default function *() {
    yield fork(fetch);
    yield fork(author);
    yield fork(magazine);
}
