/* eslint-disable import/max-dependencies */
import React from "react";
import PropTypes from "prop-types";
import DocumentTitle from "react-document-title";
import Nav from "./Nav";
import Episodes from "./Episodes";
import Placeholder from "./Placeholder";
import {clear, resourcefetch} from "reducers";
import connect from "components/lib/connect";
import {mainLayout} from "components/layout";
import Types from "components/prop-types";

@mainLayout @connect("magazine.show.resource")
export default class extends React.Component {
    static displayName = "Magazine.Show.index"

    static propTypes = {
        "data": PropTypes.shape(Types.magazine),
        "dispatch": PropTypes.func,
        "params": PropTypes.shape({"id": PropTypes.string}),
        "ready": PropTypes.bool
    }

    static defaultProps = {
        "params": {},
        "ready": false
    }

    componentWillMount () {
        const {dispatch, "params": {id}} = this.props;

        dispatch(resourcefetch(["magazine.show", `/api/web/magazines/${id}`]));
    }

    componentDidUpdate () {
        const {dispatch, "params": {id}} = this.props;

        if (!this.props.ready) {
            return;
        }

        if (String(this.props.data.id) !== id) {
            dispatch(resourcefetch(["magazine.show", `/api/web/magazines/${id}`]));
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
                    <Placeholder ready={ready}>
                        <Episodes episodes={episodes} />
                    </Placeholder>
                </div>
            </DocumentTitle>
        );
    }
}
