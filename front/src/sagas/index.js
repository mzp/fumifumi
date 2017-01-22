import {fork} from "redux-saga/effects";
import magazine from "./magazine";
import episode from "./episode";

export default function *() {
    yield fork(magazine);
    yield fork(episode);
}
