/* @flow */
import {call, take, put} from "redux-saga/effects";
import action from "actions/magazine/import";
import apiUpload from "api/upload";

export default function *(): Generator<*, *, *> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const {payload} = yield take("saga.magazine.import");

        yield put(action.set(payload));

        for (let i = 0; i < payload.length; i += 1) {
            const file = payload[i];

            yield put(action.start(file));

            try {
                yield call(apiUpload, file);
                yield put(action.success(file));
            } catch (e) {
                yield put(action.error(file, e));
            }
        }
    }
}
