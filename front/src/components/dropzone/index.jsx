import React from "react";
import Dropzone from "react-dropzone";
import Status from "./status";
import connect from "components/lib/connect";

@connect()
export default class extends React.Component {
    static displayName = "Dropzone"
    static propTypes = {
        "dispatch": React.PropTypes.func,
        "magazineFiles": React.PropTypes.arrayOf(Object)
    };
    static defaultProps = {
        "dispatch": null,
        "magazineFiles": []
    };

    handleDrop (files) {
        this.props.dispatch({
            "payload": files,
            "type": "saga.upload-magazine"
        });
    }

    render () {
        return (
            <div>
                <Dropzone onDrop={::this.handleDrop}>
                    {"📥"}
                </Dropzone>
                <ul>
                    {this.props.magazineFiles.map((file) =>
                        <li key={file.id}>
                            {file.name}
                            <Status status={file.status} />
                        </li>)}
                </ul>
            </div>);
    }
}
