/* @flow */
import {call, take} from "redux-saga/effects";
import fetch from "api/episode/author";

export default function *(): Generator<*, *, *> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const {"payload": {name}} = yield take("saga.episode.author");
        yield call(fetch, name);
    }
}
