import React from "react";
import cx from "classnames";
import ReactPlaceholder from "react-placeholder";
import Placeholder from "./placeholder";
import Page from "./Page";
import Info from "./Info";
import action from "actions/episode/show";
import Types from "components/prop-types";
import connect from "components/lib/connect";
import b from "components/lib/b";
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

    masked () {
        if (this.props.info) {
            return b("masked");
        }

        return "";
    }

    render () {
        const {"resource": {data, ready}, info} = this.props;
        const layout = b.with("pagesLayout");

        return (
            <ReactPlaceholder
                customPlaceholder={Placeholder}
                ready={ready}
            >
                <div>
                    <div className={cx(layout(), this.masked())}>
                        {(data.pages || []).map((page) =>
                            <Page
                                key={page.id}
                                layout={layout("page")}
                                {...page}
                            />)}
                    </div>
                    <Info
                        show={info}
                        {...data}
                    />
                </div>
            </ReactPlaceholder>);
    }
}
