import React from "react";
import connect from "components/lib/connect";
import {mainLayout} from "components/layout";

@mainLayout @connect("episode.magazine")
export default class extends React.Component {
    static displayName = "Episode.Magazine"

    static propTypes = {
        "dispatch": React.PropTypes.func,
        "params": React.PropTypes.shape({"id": React.PropTypes.string})
    }

    static defaultProps = {"params": {}}

    componentDidMount () {
        this.props.dispatch({
            "payload": this.props.params,
            "type": "saga.episode.magazine"
        });
    }

    render () {
        return <div />;
    }
}
