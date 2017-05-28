import {createStore, applyMiddleware, compose} from "redux";
import {reducer, jsonify, taskMiddleware, initialState} from "reducers";

function createComposeEnhancers () {
  /* eslint-disable no-underscore-dangle */
    if (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({"stateSanitizer": jsonify});
    }

    return compose;

  /* eslint-enable no-underscore-dangle */
}

export default function () {
    const composeEnhancers = createComposeEnhancers();

    return createStore(reducer, initialState,
      composeEnhancers(applyMiddleware(taskMiddleware)));
}
