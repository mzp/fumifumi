/* @flow */
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import createStore from "store";
import routes from "routes";

window.onload = () => {
    const mountNode : Element = document.getElementById("js");

    if (mountNode) {
        const store = createStore();

        render(
            <Provider store={store}>
                <Router
                    history={browserHistory}
                    routes={routes}
                />
            </Provider>,
          mountNode);
    }
};
