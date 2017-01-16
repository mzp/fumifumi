/* @flow */
import {call, take, put} from "redux-saga/effects";
import action from "actions/magazine/list";
import fetch from "api/fetch";

export default function *(): Generator<*, *, *> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        yield take("saga.magazine.list.fetch");
        yield put(action.start());
        const response = yield call(fetch);

        // TODO: add error handling

        yield put(action.fetch(response.data));
    }
}
