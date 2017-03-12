import {fork} from "redux-saga/effects";
import magazine from "./magazine";
import episode from "./episode";
import resource from "./resource";

export default function *() {
    yield fork(magazine);
    yield fork(episode);
    yield fork(resource);
}
