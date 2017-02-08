import {fork} from "redux-saga/effects";
import fetch from "./fetch";
import fetchNext from "./fetch-next";

export default function *() {
    yield fork(fetch);
    yield fork(fetchNext);
}
