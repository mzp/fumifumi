/* @flow */
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import Dropzone from "components/dropzone";
import createStore from "store";

window.onload = () => {
    const mountNode : Element = document.getElementById("js");

    if (mountNode) {
        const store = createStore();

        render(<Provider store={store}><Dropzone /></Provider>, mountNode);
    }
};
