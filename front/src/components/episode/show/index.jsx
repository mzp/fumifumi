import React from "react";
import DocumentTitle from "react-document-title";
import ReactPlaceholder from "react-placeholder";
import Placeholder from "./placeholder";
import Pages from "./Pages";
import Info from "./Info";
import action from "actions/episode/show";
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
        "ready": false,
        "resource": {}
    }

    componentDidMount () {
        const {dispatch, "params": {id}} = this.props;

        dispatch(action.fetch(id));
    }

    componentWillUnmount () {
        this.props.dispatch(action.clear());
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
