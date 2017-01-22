/* @flow */
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import {mainLayout} from "components/layout";
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
                        component={mainLayout(MagazineImport)}
                        path="/magazines/new"
                    />
                    <Route
                        component={mainLayout(MagazineList)}
                        path="/magazines"
                    />
                    <Route
                        component={mainLayout(Episode)}
                        path="/episodes/:id"
                    />
                </Router>
            </Provider>,
          mountNode);
    }
};
