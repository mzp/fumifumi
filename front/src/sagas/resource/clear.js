import {take, put} from "redux-saga/effects";

export default function *(): Generator<*, *, *> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const {"payload": {"resource": {fetchData, hasMore, notReady}}} = yield take("saga.resource.clear");

        yield put(fetchData([]));
        yield put(hasMore(false));
        yield put(notReady());
    }
}
