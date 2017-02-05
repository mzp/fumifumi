/* @flow */
import {take, put, call} from "redux-saga/effects";
import action from "actions/episode/show";
import fetch from "api/episode/fetch";

export default function *(): Generator<*, *, *> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const {"payload": {id}} = yield take("saga.episode.fetch");

        yield put(action.start());

        const response = yield call(fetch, id);

        yield put(action.fetch(response.data));
    }
}
