import {createStore} from "redux";
import {reducer, jsonify} from "reducers";

export default function (initialState: any) {
    /* eslint-disable no-underscore-dangle */
    return createStore(reducer, initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({"stateSanitizer": jsonify}));
    /* eslint-enable no-underscore-dangle */
}
