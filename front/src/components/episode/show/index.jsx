/* eslint-disable import/max-dependencies */
import React from "react";
import DocumentTitle from "react-document-title";
import ReactPlaceholder from "react-placeholder";
import Placeholder from "./placeholder";
import Pages from "./Pages";
import Info from "./Info";
import {fetch} from "reducers/resource";
import {clear} from "reducers";
import Types from "components/prop-types";
import connect from "components/lib/connect";
import {floatLayout} from "components/layout";

@floatLayout @connect("episode.show")
export default class extends React.Component {
    static displayName = "Episode.Show"

    static propTypes = {
        "dispatch": React.PropTypes.func,
        "info": React.PropTypes.bool,
        "params": React.PropTypes.shape({"id": React.PropTypes.string}),
        "resource": React.PropTypes.shape({"data": React.PropTypes.shape(Types.episode)})
    }

    static defaultProps = {
        "info": false,
        "params": {"id": null},
        "resource": {}
    }

    componentDidMount () {
        const {dispatch, "params": {id}} = this.props;

        fetch(dispatch, "episode.show", `/api/web/episodes/${id}`);
    }

    componentDidUpdate () {
        const {dispatch, "params": {id}, "resource": {ready, data}} = this.props;

        if (!ready) {
            return;
        }

        if (String(data.id) !== id) {
            fetch(dispatch, "episode.show", `/api/web/episodes/${id}`);
        }
    }

    componentWillUnmount () {
        this.props.dispatch(clear("episode.show"));
    }

    render () {
        const {"resource": {data, ready}, info} = this.props;

        return (
            <ReactPlaceholder
                customPlaceholder={Placeholder}
                ready={ready}
            >
                <DocumentTitle title={data.title || "..."}>
                    <div>
                        <Pages
                            info={info}
                            pages={data.pages}
                        />
                        <Info
                            show={info}
                            {...data}
                        />
                    </div>
                </DocumentTitle>
            </ReactPlaceholder>);
    }
}
