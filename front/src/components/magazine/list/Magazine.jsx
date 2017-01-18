import React from "react";
import Page from "./Page";
import Types from "./types";
import Scroll from "./Scroll";
import b from "components/lib/b";

export default class extends React.Component {
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
                    <Scroll layout={magazineEpisode}>
                        {[
                            <Page
                                key="cover"
                                {...cover}
                            />,
                            ...episodes.map((e) =>
                                <Page
                                    key={e.id}
                                    url={e.url}
                                    {...e.page}
                                />)
                        ]}
                    </Scroll>
                </div>
            </div>
        );
    }
}
