import React from "react";
import PropTypes from "prop-types";

/* eslint-disable react/no-set-state */
export default class extends React.Component {
    static displayName = "Image"

    static propTypes = {"src": PropTypes.string.isRequired}

    constructor (...args) {
        super(...args);
        this.state = {"ready": false};
    }

    onLoad () {
        this.setState({"ready": true});
    }

    src () {
        if (this.state.ready) {
            return this.props.src;
        }

        return "";

    }

    render () {
        const {...props} = this.props;

        return (
            <img
                data-ready={this.state.ready}
                onLoad={::this.onLoad}
                {...props}
            />
        );
    }
}
