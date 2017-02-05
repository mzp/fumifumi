import React from "react";
import ReactPlaceholder from "react-placeholder";
import Placeholder from "./placeholder";
import Info from "./Info";
import Page from "./Page";
import b from "components/lib/b";
import Types from "components/prop-types";

export default class extends React.Component {
    static displayName = "Episode.Tile"

    static propTypes = {
        "episodes": React.PropTypes.arrayOf(React.PropTypes.shape(Types.episode)),
        "ready": React.PropTypes.bool,
        "title": React.PropTypes.string
    }

    static defaultProps = {
        "episodes": [],
        "ready": false,
        "title": ""
    }

    render () {
        const {episodes, ready, title} = this.props;
        const layout = b.with("tileLayout");

        return (
            <ReactPlaceholder
                customPlaceholder={Placeholder}
                ready={ready}
            >
                <div>
                    <Info name={title} />
                    <div className={layout()}>
                        {episodes.map((e) =>
                            <Page
                                key={e.id}
                                layout={layout("tile")}
                                url={e.url}
                                {...e.page}
                            />)
                        }
                    </div>
                </div>
            </ReactPlaceholder>
        );
    }
}
