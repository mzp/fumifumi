/* eslint-disable import/max-dependencies */
import React from "react";
import PropTypes from "prop-types";
import DocumentTitle from "react-document-title";
import ReactPlaceholder from "react-placeholder";
import Placeholder from "./placeholder";
import Pages from "./Pages";
import Info from "./Info";
import {clear, resourcefetch} from "reducers";
import Types from "components/prop-types";
import connect from "components/lib/connect";
import {floatLayout} from "components/layout";

@floatLayout @connect("episode.show")
export default class extends React.Component {
    static displayName = "Episode.Show"

    static propTypes = {
        "dispatch": PropTypes.func,
        "info": PropTypes.bool,
        "params": PropTypes.shape({"id": PropTypes.string}),
        "resource": PropTypes.shape({"data": PropTypes.shape(Types.episode)})
    }

    static defaultProps = {
        "info": false,
        "params": {"id": null},
        "resource": {}
    }

    componentDidMount () {
        const {dispatch, "params": {id}} = this.props;

        dispatch(resourcefetch(["episode.show", `/api/web/episodes/${id}`]));
    }

    componentDidUpdate () {
        const {dispatch, "params": {id}, "resource": {ready, data}} = this.props;

        if (!ready) {
            return;
        }

        if (String(data.id) !== id) {
            dispatch(resourcefetch(["episode.show", `/api/web/episodes/${id}`]));
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
