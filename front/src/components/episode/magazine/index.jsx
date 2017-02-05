import React from "react";
import connect from "components/lib/connect";
import {mainLayout} from "components/layout";
import Types from "components/prop-types";
import Tile from "components/episode/tile";

@mainLayout @connect("episode.magazine")
export default class extends React.Component {
    static displayName = "Episode.Magazine"

    static propTypes = {
        "dispatch": React.PropTypes.func,
        "episodes": React.PropTypes.arrayOf(React.PropTypes.shape(Types.episode)),
        "magazine": React.PropTypes.shape(Types.magazine),
        "params": React.PropTypes.shape({"id": React.PropTypes.string}),
        "ready": React.PropTypes.bool
    }

    static defaultProps = {
        "params": {},
        "ready": false
    }

    componentDidMount () {
        this.props.dispatch({
            "payload": this.props.params,
            "type": "saga.episode.magazine"
        });
    }

    render () {
        const {"magazine": {title}, episodes, ready} = this.props;

        return (
            <Tile
                episodes={episodes}
                ready={ready}
                title={title}
            />
        );
    }
}
