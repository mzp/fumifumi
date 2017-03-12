import React from "react";
import ReactPlaceholder from "react-placeholder";
import Nav from "./Nav";
import Episodes from "./Episodes";
import Placeholder from "./placeholder";
import action from "actions/episode/magazine";
import connect from "components/lib/connect";
import {mainLayout} from "components/layout";
import Types from "components/prop-types";

@mainLayout @connect("episode.magazine.resource")
export default class extends React.Component {
    static displayName = "Episode.Magazine.index"

    static propTypes = {
        "data": React.PropTypes.shape(Types.magazine),
        "dispatch": React.PropTypes.func,
        "params": React.PropTypes.shape({"id": React.PropTypes.string}),
        "ready": React.PropTypes.bool
    }

    static defaultProps = {
        "params": {},
        "ready": false
    }

    componentDidMount () {
        const {dispatch, "params": {id}} = this.props;

        dispatch(action.fetch(id));
    }

    render () {
        const {"data": {title, episodes}, ready} = this.props;

        return (
            <div>
                <Nav title={title} />
                <ReactPlaceholder
                    customPlaceholder={Placeholder}
                    ready={ready}
                >
                    <Episodes episodes={episodes} />
                </ReactPlaceholder>
            </div>
        );
    }
}
