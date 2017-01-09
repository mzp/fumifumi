import React from "react";
import Dropzone from "react-dropzone";

export default class extends React.Component {
    static displayName = "Dropzone"

    render () {
        return (
            <Dropzone>
                {"📥"}
            </Dropzone>);
    }
}
