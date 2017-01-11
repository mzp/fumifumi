/* @flow */
import {applyMiddleware, createStore, compose} from "redux";
// eslint-disable-next-line no-duplicate-imports, import/named
import type {Store} from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "reducers";
import sagas from "sagas";

function dev () {
    if (window.devToolsExtension) {
        return window.devToolsExtension();
    }

    return (f) => f;
}

function finalCreateStore (middleware) {
    return compose(
      applyMiddleware(middleware),
      dev()
    )(createStore);
}

export default function (initialState: any): Store<*, *> {
    const
        sagaMiddleware = createSagaMiddleware(),
        store = finalCreateStore(sagaMiddleware)(reducers, initialState);

    sagaMiddleware.run(sagas);

    return store;
}
