import React from "react";
import cx from "classnames";
import ReactPlaceholder from "react-placeholder";
import Placeholder from "./placeholder";
import Page from "./Page";
import Info from "./Info";
import Types from "components/prop-types";
import connect from "components/lib/connect";
import b from "components/lib/b";
import {floatLayout} from "components/layout";

@floatLayout @connect("episode.show")
export default class extends React.Component {
    static displayName = "Episode.Show"

    static propTypes = {
        "dispatch": React.PropTypes.func,
        "episode": React.PropTypes.shape(Types.episode),
        "info": React.PropTypes.bool,
        "pages": React.PropTypes.arrayOf(React.PropTypes.shape(Types.page)),
        "params": React.PropTypes.shape({"id": React.PropTypes.string}),
        "ready": React.PropTypes.bool
    }

    static defaultProps = {
        "info": false,
        "pages": [],
        "params": {"id": null},
        "ready": false
    }

    componentDidMount () {
        const {id} = this.props.params;

        this.props.dispatch({
            "payload": {id},
            "type": "saga.episode.fetch"
        });
    }

    masked () {
        if (this.props.info) {
            return b("masked");
        }

        return "";
    }

    render () {
        const {episode, pages, ready, info} = this.props;
        const layout = b.with("pagesLayout");

        return (
            <ReactPlaceholder
                customPlaceholder={Placeholder}
                ready={ready}
            >
                <div>
                    <div className={cx(layout(), this.masked())}>
                        {pages.map((page) =>
                            <Page
                                key={page.id}
                                layout={layout("page")}
                                {...page}
                            />)}
                    </div>
                    <Info
                        show={info}
                        {...episode}
                    />
                </div>
            </ReactPlaceholder>);
    }
}
