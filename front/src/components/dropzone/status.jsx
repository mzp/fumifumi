import React from "react";

export default class extends React.PureComponent {
    static displayName = "Dropzone.Status"
    static propTypes = {"status": React.PropTypes.string.isRequired};

    render () {
        switch (this.props.status) {
        case "success":
            return <span>{"✅"}</span>;
        case "error":
            return <span>{"⚠️"}</span>;
        case "start":
            return <span>{"⏫"}</span>;
        case "prepare":
            return <span>{"💭"}</span>;
        default:
            return <span />;
        }
    }
}
