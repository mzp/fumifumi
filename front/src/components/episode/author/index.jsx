import React from "react";
import PropTypes from "prop-types";
import DocumentTitle from "react-document-title";
import ReactPlaceholder from "react-placeholder";
import {fetch} from "reducers/resource";
import connect from "components/lib/connect";
import Types from "components/prop-types";
import {mainLayout} from "components/layout";
import Tile from "components/episode/tile";

@mainLayout @connect("episode.author.resource")
export default class extends React.Component {
    static displayName = "Episode.Author"

    static propTypes = {
        "data": PropTypes.arrayOf(PropTypes.shape(Types.episode)),
        "dispatch": PropTypes.func,
        "params": PropTypes.shape({"name": PropTypes.string}).isRequired,
        "ready": PropTypes.bool
    }

    static defaultProps = {
        "data": [],
        "params": {},
        "ready": false
    }

    componentDidMount () {
        const {dispatch, "params": {name}} = this.props;

        fetch(dispatch, "episode.author", `/api/web/episodes/author?name=${name}`);
    }

    render () {
        const {data, ready, "params": {name}} = this.props;

        return (
            <DocumentTitle title={name}>
                <Tile
                    episodes={data}
                    ready={ready}
                    title={name}
                />
            </DocumentTitle>
        );
    }
}
