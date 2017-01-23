import React from "react";
import ReactPlaceholder from "react-placeholder";
import Placeholder from "./placeholder";
import Page from "./Page";
import Types from "components/prop-types";
import connect from "components/lib/connect";
import b from "components/lib/b";
import {floatLayout} from "components/layout";

@floatLayout @connect("episode.show")
export default class extends React.Component {
    static displayName = "Episode.Show"

    static propTypes = {
        "dispatch": React.PropTypes.func,
        "pages": React.PropTypes.arrayOf(React.PropTypes.shape(Types.page)),
        "params": React.PropTypes.shape({"id": React.PropTypes.string}),
        "ready": React.PropTypes.bool
    }

    static defaultProps = {
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

    render () {
        const {pages, ready} = this.props;
        const layout = b.with("pagesLayout");

        return (
            <ReactPlaceholder
                customPlaceholder={Placeholder}
                ready={ready}
            >
                <div>
                    <div className={layout()}>
                        {pages.map((page) =>
                            <Page
                                key={page.id}
                                layout={layout("page")}
                                {...page}
                            />)}
                    </div>
                </div>
            </ReactPlaceholder>);
    }
}
