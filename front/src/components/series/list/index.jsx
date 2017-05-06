import React from "react";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import Series from "./Series";
import Placeholder from "./placeholder";
import {fetch} from "reducers/resource";
import {fetchNext} from "reducers/pagingResource";
import {mainLayout} from "components/layout";
import connect from "components/lib/connect";
import Types from "components/prop-types";

@mainLayout @connect("series.list")
export default class extends React.Component {
    static displayName = "Series.List.index"
    static propTypes = {
        "dispatch": PropTypes.func,
        "magazines": PropTypes.objectOf(
            PropTypes.arrayOf(
              PropTypes.shape(Types.magazine)
        )),
        "series": PropTypes.shape({
            "data": PropTypes.arrayOf(PropTypes.shape(Types.series)),
            "ready": PropTypes.bool
        })
    }

    static defaultProps = {
        "dispatch": null,
        "magazines": {},
        "series": {
            "data": [],
            "ready": false
        }
    }

    componentDidMount () {
        const {dispatch, "series": {ready}} = this.props;

        if (!ready) {
            fetch(dispatch, "series.list", "/api/web/series");
        }
    }

    handleLoad (id) {
        const magazines = this.props.magazines[id];

        fetchNext(this.props.dispatch, `series.list.magazines.${id}`, magazines.next);
    }

    seriesElement (series) {
        const magazines = this.props.magazines[series.id];
        const hasMore = !magazines.loading && Boolean(magazines.next);

        return (
            <Series
                hasMore={hasMore}
                key={series.id}
                magazines={magazines.data}
                onLoad={() => this.handleLoad(series.id)}
                title={series.title}
            />);
    }

    render () {
        const {data, ready} = this.props.series;

        return (
            <ReactPlaceholder
                customPlaceholder={Placeholder}
                ready={ready}
            >
                <div>
                    {data.map(::this.seriesElement)}
                </div>
            </ReactPlaceholder>
        );
    }
}
