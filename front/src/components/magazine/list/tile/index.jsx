import React from "react";
import ReactPlaceholder from "react-placeholder";
import Magazine from "./Magazine";
import Placeholder from "./placeholder";
import connect from "components/lib/connect";

@connect("magazine.list")
export default class extends React.Component {
    static displayName = "Magazine.Tile"

    static propTypes = {
        "dispatch": React.PropTypes.func,
        "magazines": React.PropTypes.arrayOf(Object),
        "ready": React.PropTypes.bool
    };
    static defaultProps = {
        "dispatch": null,
        "magazines": [],
        "ready": false
    };

    componentDidMount () {
        this.props.dispatch({"type": "saga.magazine.list.fetch"});
    }

    render () {
        const {magazines, ready} = this.props;

        return (
            <ReactPlaceholder
                customPlaceholder={Placeholder}
                ready={ready}
            >
                <div>
                    {magazines.map((m) =>
                        <Magazine
                            key={m.id}
                            {...m}
                        />) }
                </div>
            </ReactPlaceholder>
        );
    }
}
