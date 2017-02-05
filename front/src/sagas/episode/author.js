/* @flow */
import {call, put, take} from "redux-saga/effects";
import action from "actions/episode/author";
import fetch from "api/episode/author";

export default function *(): Generator<*, *, *> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const {"payload": {name}} = yield take("saga.episode.author");

        yield put(action.fetch(data));

        const {data} = yield call(fetch, name);

        yield put(action.fetch(data));
    }
}
