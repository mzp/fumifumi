import React from "react";

export default class extends React.PureComponent {
    static displayName = "Magazine.Import.Status"
    static propTypes = {
        "error": React.PropTypes.shape({"response": React.PropTypes.object}),
        "status": React.PropTypes.string.isRequired
    };
    static defaultProps = {"error": null};

    render () {
        switch (this.props.status) {
        case "success":
            return <span>{"✅"}</span>;
        case "error":
            return <span>{"⚠️:"}{this.props.error.response.data}</span>;
        case "start":
            return <span>{"⏫"}</span>;
        case "prepare":
            return <span>{"💭"}</span>;
        default:
            return <span />;
        }
    }
}
