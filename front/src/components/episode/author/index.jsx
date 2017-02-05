import React from "react";
import ReactPlaceholder from "react-placeholder";
import connect from "components/lib/connect";
import Types from "components/prop-types";
import {mainLayout} from "components/layout";
import Tile from "components/episode/tile";

@mainLayout @connect("episode.author")
export default class extends React.Component {
    static displayName = "Episode.Author"

    static propTypes = {
        "dispatch": React.PropTypes.func,
        "episodes": React.PropTypes.arrayOf(React.PropTypes.shape(Types.episode)),
        "params": React.PropTypes.shape({"name": React.PropTypes.string}).isRequired,
        "ready": React.PropTypes.bool
    }

    static defaultProps = {
        "episodes": [],
        "params": {},
        "ready": false
    }

    componentDidMount () {
        this.props.dispatch({
            "payload": this.props.params,
            "type": "saga.episode.author"
        });
    }

    render () {
        const {episodes, ready, "params": {name}} = this.props;

        return (
            <Tile
                episodes={episodes}
                ready={ready}
                title={name}
            />
        );
    }
}
