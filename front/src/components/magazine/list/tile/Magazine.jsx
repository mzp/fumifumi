import React from "react";
import {Link} from "react-router";
import EpisodeThumbnail from "components/common/EpisodeThumbnail";
import Types from "components/prop-types";
import b from "components/lib/b";

export default class extends React.Component {
    static displayName = "MagazineList.Tite";
    static propTypes = Types.magazine;

    render () {
        const {title, url, cover, episodes} = this.props;
        const info = b.with("info");
        const layout = b.with("tileLayout");

        return (
            <div>
                <div className={info()}>
                    <h2 className={info("main")}>
                        <Link to={url}>{title}</Link>
                    </h2>
                </div>
                <div className={layout()}>
                    <EpisodeThumbnail
                        layout={layout("tile")}
                        url={url}
                        {...cover}
                    />
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
        );
    }
}
