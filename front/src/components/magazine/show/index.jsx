import React from "react";
import DocumentTitle from "react-document-title";
import ReactPlaceholder from "react-placeholder";
import Nav from "./Nav";
import Episodes from "./Episodes";
import Placeholder from "./placeholder";
import {fetch} from "reducers/resource";
import {clear} from "reducers";
import connect from "components/lib/connect";
import {mainLayout} from "components/layout";
import Types from "components/prop-types";

@mainLayout @connect("magazine.show.resource")
export default class extends React.Component {
    static displayName = "Magazine.Show.index"

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

    componentWillMount () {
        const {dispatch, "params": {id}} = this.props;

        fetch(dispatch, "magazine.show", `/api/web/magazines/${id}`);
    }

    componentDidUpdate () {
        const {dispatch, "params": {id}} = this.props;

        if (!this.props.ready) {
            return;
        }

        if (String(this.props.data.id) !== id) {
            fetch(dispatch, "magazine.show", `/api/web/magazines/${id}`);
        }
    }

    componentWillUnmount () {
        this.props.dispatch(clear("magazine.show"));
    }

    render () {
        const {data, ready} = this.props;
        const {title, episodes, next, prev} = data || {};

        return (
            <DocumentTitle title={title || "..."}>
                <div>
                    <Nav
                        next={next && next.url}
                        prev={prev && prev.url}
                        title={title}
                    />
                    <ReactPlaceholder
                        customPlaceholder={Placeholder}
                        ready={ready}
                    >
                        <Episodes episodes={episodes} />
                    </ReactPlaceholder>
                </div>
            </DocumentTitle>
        );
    }
}
