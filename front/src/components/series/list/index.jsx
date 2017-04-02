import React from "react";
import ReactPlaceholder from "react-placeholder";
import Series from "./Series";
import Placeholder from "./placeholder";
import {fetch} from "reducers/resource";
import {mainLayout} from "components/layout";
import connect from "components/lib/connect";
import Types from "components/prop-types";

@mainLayout @connect("series.list.resource")
export default class extends React.Component {
    static displayName = "Series.List.index"
    static propTypes = {
        "data": React.PropTypes.arrayOf(React.PropTypes.shape(Types.series)),
        "dispatch": React.PropTypes.func,
        "ready": React.PropTypes.bool
    }
    static defaultProps = {
        "data": [],
        "dispatch": null,
        "ready": false
    }

    componentDidMount () {
        fetch(this.props.dispatch, "series.list", "/api/web/series");
    }

    render () {
        const {data, ready} = this.props;

        return (
            <ReactPlaceholder
                customPlaceholder={Placeholder}
                ready={ready}
            >
                <div>
                    {data.map((series) =>
                        <Series
                            key={series.id}
                            {...series}
                        />)}
                </div>
            </ReactPlaceholder>
        );
    }
}
