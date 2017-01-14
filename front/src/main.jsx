/* @flow */
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import Dropzone from "components/dropzone";
import createStore from "store";

window.onload = () => {
    const mountNode : Element = document.getElementById("js");

    if (mountNode) {
        const store = createStore();
        const history = syncHistoryWithStore(browserHistory, store);

        render(
            <Provider store={store}>
                <Router history={history}>
                    <Route
                        component={Dropzone}
                        path="/magazines/new"
                    />
                </Router>
            </Provider>,
          mountNode);
    }
};
