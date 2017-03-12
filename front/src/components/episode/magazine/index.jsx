import React from "react";
import action from "actions/episode/magazine";
import connect from "components/lib/connect";
import {mainLayout} from "components/layout";
import Types from "components/prop-types";
import Tile from "components/episode/tile";

@mainLayout @connect("episode.magazine.resource")
export default class extends React.Component {
    static displayName = "Episode.Magazine"

    static propTypes = {
        "dispatch": React.PropTypes.func,
        "data": React.PropTypes.shape(Types.magazine),
        "params": React.PropTypes.shape({"id": React.PropTypes.string}),
        "ready": React.PropTypes.bool
    }

    static defaultProps = {
        "params": {},
        "ready": false
    }

    componentDidMount () {
        const {dispatch, params: {id}} = this.props;
        dispatch(action.fetch(id));
    }

    render () {
        const {"data": {title, episodes}, ready} = this.props;

        return (
            <Tile
                episodes={episodes}
                ready={ready}
                title={title}
            />
        );
    }
}
