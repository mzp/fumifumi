import {fork} from "redux-saga/effects";
import magazine from "./magazine";
import resource from "./resource";

export default function *() {
    yield fork(magazine);
    yield fork(resource);
}
