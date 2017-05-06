import React from "react";
import PropTypes from "prop-types";

export default class extends React.PureComponent {
    static displayName = "Magazine.Import.Status"
    static propTypes = {
        "error": PropTypes.shape({"response": PropTypes.object}),
        "status": PropTypes.string.isRequired
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
