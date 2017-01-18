import React from "react";
import Page from "./Page";
import Types from "./types";
import NavButton from "./NavButton";
import b from "components/lib/b";

export default class extends React.PureComponent {
    static displayName = "MagazineList.Magazine"
    static propTypes = Types.magazine;

    render () {
        const {title, cover, episodes} = this.props;
        const magazine = b.with("magazineLayout");
        const magazineEpisode = b.with("magazineEpisodeLayout");

        return (
            <div className={magazine()}>
                <div className={magazine("title")}>
                    {title}
                </div>
                <div className={magazine("content")}>
                    <div className={magazineEpisode()}>
                        <NavButton
                            label="<"
                            layout={magazineEpisode("prev")}
                        />
                        <NavButton
                            label=">"
                            layout={magazineEpisode("next")}
                        />
                        <div className={magazineEpisode("contents")} >
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
