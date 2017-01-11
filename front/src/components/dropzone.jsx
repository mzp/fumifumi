import {post} from "axios";
import React from "react";
import Dropzone from "react-dropzone";
import headers from "rails-header";

/* eslint-disable react/no-set-state */
export default class extends React.Component {
    static displayName = "Dropzone"

    constructor (...args) {
        super(...args);
        this.state = {"message": ""};
    }

    handleDrop (files) {
        const
            config = {
                "headers": headers(),
                "onUploadProgress": (e) => {
                    const progress = Math.round(e.loaded * 100 / e.total);

                    this.setState({"message": `${progress}%`});
                }
            },
            data = new FormData();

        data.append("attachment", files[0]);

        post("/magazines", data, config).
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
