import React from "react";
import Page from "./Page";
import Types from "./types";
import NavButton from "./NavButton";

export default class extends React.PureComponent {
    static displayName = "MagazineList.Magazine"
    static propTypes = Types.magazine;

    render () {
        const {title, cover, episodes} = this.props;

        return (
            <div className="magazineLayout">
                <div className="magazineLayout_title">
                    {title}
                </div>
                <div className="magazineLayout_content">
                    <div className="magazineEpisodeLayout">
                        <NavButton
                            label="<"
                            layout="magazineEpisodeLayout_prev"
                        />
                        <NavButton
                            label=">"
                            layout="magazineEpisodeLayout_next"
                        />
                        <div className="magazineEpisodeLayout_contents">
                            <Page {...cover} />
                            {episodes.map((e) =>
                                <Page
                                    key={e.id}
                                    url={e.url}
                                    {...e.page}
                                />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
