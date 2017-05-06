import React from "react";
import PropTypes from "prop-types";
import ReactPlaceholder from "react-placeholder";
import Placeholder from "./placeholder";
import Info from "./Info";
import EpisodeThumbnail from "components/common/EpisodeThumbnail";
import b from "components/lib/b";
import Types from "components/prop-types";

export default class extends React.Component {
    static displayName = "Episode.Tile"

    static propTypes = {
        "episodes": PropTypes.arrayOf(PropTypes.shape(Types.episode)),
        "ready": PropTypes.bool,
        "title": PropTypes.string
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
                            <EpisodeThumbnail
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
