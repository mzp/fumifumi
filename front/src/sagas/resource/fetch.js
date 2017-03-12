/* @flow */
import {call, take, put} from "redux-saga/effects";

export default function *(): Generator<*, *, *> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const {"payload": {api, "resource": {start, fetchData, hasMore}}} = yield take("saga.resource.fetch");

        yield put(start());
        const {data, "headers": {hasmore}} = yield call(api);

        // TODO: add error handling

        yield put(fetchData(data));
        yield put(hasMore(hasmore === "true"));
    }
}
