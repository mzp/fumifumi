/* @flow */
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import layout from "components/layout";
import MagazineImport from "components/magazine/import";
import MagazineList from "components/magazine/list";
import Episode from "components/episode/show";
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
                        component={layout(MagazineImport)}
                        path="/magazines/new"
                    />
                    <Route
                        component={layout(MagazineList)}
                        path="/magazines"
                    />
                    <Route
                        component={layout(Episode, {"float": true})}
                        path="/episodes/:id"
                    />
                </Router>
            </Provider>,
          mountNode);
    }
};
