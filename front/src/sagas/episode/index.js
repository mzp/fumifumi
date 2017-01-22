import {fork} from "redux-saga/effects";
import fetch from "./fetch";

export default function *() {
    yield fork(fetch);
}
