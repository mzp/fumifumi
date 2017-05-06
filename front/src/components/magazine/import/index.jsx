/* eslint-disable react/forbid-component-props */
import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import Status from "./status";
import {import_} from "reducers/magazine";
import connect from "components/lib/connect";
import {mainLayout} from "components/layout";

@mainLayout @connect("magazine.import_")
export default class extends React.Component {
    static displayName = "Magazine.Import"
    static propTypes = {
        "dispatch": PropTypes.func,
        "files": PropTypes.arrayOf(Object)
    };
    static defaultProps = {
        "dispatch": null,
        "files": []
    };

    handleDrop (files) {
        import_(this.props.dispatch, files);
    }

    render () {
        return (
            <div>
                <Dropzone
                    className={"dropzone"}
                    onDrop={::this.handleDrop}
                >
                    {"📥"}
                </Dropzone>
                <ul>
                    {this.props.files.map((file) =>
                        <li key={file.id}>
                            {file.name}
                            <Status
                                error={file.error}
                                status={file.status}
                            />
                        </li>)}
                </ul>
            </div>);
    }
}
