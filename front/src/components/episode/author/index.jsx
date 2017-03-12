import React from "react";
import ReactPlaceholder from "react-placeholder";
import action from "actions/episode/author";
import connect from "components/lib/connect";
import Types from "components/prop-types";
import {mainLayout} from "components/layout";
import Tile from "components/episode/tile";

@mainLayout @connect("episode.author.resource")
export default class extends React.Component {
    static displayName = "Episode.Author"

    static propTypes = {
        "data": React.PropTypes.arrayOf(React.PropTypes.shape(Types.episode)),
        "dispatch": React.PropTypes.func,
        "params": React.PropTypes.shape({"name": React.PropTypes.string}).isRequired,
        "ready": React.PropTypes.bool
    }

    static defaultProps = {
        "data": [],
        "params": {},
        "ready": false
    }

    componentDidMount () {
        const {dispatch, "params": {name}} = this.props;

        dispatch(action.fetch(name));
    }

    render () {
        const {data, ready, "params": {name}} = this.props;

        return (
            <Tile
                episodes={data}
                ready={ready}
                title={name}
            />
        );
    }
}
