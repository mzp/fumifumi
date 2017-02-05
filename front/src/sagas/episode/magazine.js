/* @flow */
import {call, put, take} from "redux-saga/effects";
import action from "actions/episode/magazine";
import fetch from "api/episode/magazine";

export default function *(): Generator<*, *, *> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const {"payload": {id}} = yield take("saga.episode.magazine");

        yield put(action.start());

        const {data} = yield call(fetch, id);

        yield put(action.fetch(data));
    }
}
