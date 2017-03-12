import React from "react";
import cx from "classnames";
import EpisodeThumbnail from "components/common/EpisodeThumbnail";
import b from "components/lib/b";
import Types from "components/prop-types";

export default class extends React.Component {
    static displayName = "Episode.Magazine.Episodes"

    static propTypes = {"episodes": React.PropTypes.arrayOf(React.PropTypes.shape(Types.episode))}

    static defaultProps = {"episodes": []}

    render () {
        const {episodes} = this.props;
        const layout = b.with("tileLayout");

        return (
            <div className={cx(b("magazineEpisodes"), layout())}>
                {episodes.map((e) =>
                    <EpisodeThumbnail
                        key={e.id}
                        layout={layout("tile")}
                        url={e.url}
                        {...e.page}
                    />)
                    }
            </div>
        );
    }
}
