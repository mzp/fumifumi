import React from "react";
import Info from "./Info";
import b from "components/lib/b";
import connect from "components/lib/connect";
import {mainLayout} from "components/layout";

@mainLayout @connect("episode.author")
export default class extends React.Component {
    static displayName = "Episode.Author"

    static propTypes = {
        "dispatch": React.PropTypes.func,
        "params": React.PropTypes.shape({"name": React.PropTypes.string}).isRequired
    }

    static defaultProps = {}

    componentDidMount () {
        this.props.dispatch({
            "payload": this.props.params,
            "type": "saga.episode.author"
        });
    }

    render () {
        return <div />;
    }
}
