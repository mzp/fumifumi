import React from "react";
import Dropzone from "react-dropzone";
import Status from "./status";
import connect from "components/lib/connect";

@connect("magazine.import_")
export default class extends React.Component {
    static displayName = "Magazine.Import"
    static propTypes = {
        "dispatch": React.PropTypes.func,
        "files": React.PropTypes.arrayOf(Object)
    };
    static defaultProps = {
        "dispatch": null,
        "files": []
    };

    handleDrop (files) {
        this.props.dispatch({
            "payload": files,
            "type": "saga.magazine.import"
        });
    }

    render () {
        return (
            <div>
                <Dropzone onDrop={::this.handleDrop}>
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
