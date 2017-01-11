import {post} from "axios";
import React from "react";
import Dropzone from "react-dropzone";
import upload from "api/upload";

/* eslint-disable react/no-set-state */
export default class extends React.Component {
    static displayName = "Dropzone"

    constructor (...args) {
        super(...args);
        this.state = {"message": ""};
    }

    handleDrop (files) {
        upload(files[0], (progress) => {
          this.setState({"message": `${progress}%`});
        }).
        then(() => this.setState({"message": "ok"})).
        catch((err) => this.setState({"message": err.message}));
    }

    render () {
        return (
            <div>
                <p>{this.state.message}</p>
                <Dropzone onDrop={::this.handleDrop}>
                    {"📥"}
                </Dropzone>
            </div>);
    }
}
