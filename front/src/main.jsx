/* @flow */
import React from "react";
import {render} from "react-dom";
import Dropzone from "dropzone";
import {Provider} from "react-redux";
import createStore from "store";

window.onload = () => {
    const mountNode : Element = document.getElementById("js");

    if (mountNode) {
        const store = createStore();

        render(<Provider store={store}><Dropzone /></Provider>, mountNode);
    }
};
