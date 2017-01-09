/* @flow */
import React from "react";
import {render} from "react-dom";
import Dropzone from "dropzone";

window.onload = () => {
    const mountNode : Element = document.getElementById("js");

    if (mountNode) {
        render(<Dropzone />, mountNode);
    }
};
