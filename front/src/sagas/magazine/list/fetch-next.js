/* @flow */
import {call, take, put} from "redux-saga/effects";
import action from "actions/magazine/list";
import fetch from "api/magazine/fetch";

export default function *(): Generator<*, *, *> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const {"payload": {page}} = yield take("saga.magazine.list.fetch-next");
        const response = yield call(fetch, page);

        // TODO: add error handling
        yield put(action.fetchNext(response.data));
    }
}
