import React from "react";
import includes from "lodash.includes";
import scrollTo from "scroll-to";
import Page from "./Page";
import Scroll from "./Scroll";
import Episode from "./Episode";
import b from "components/lib/b";
import connect from "components/lib/connect";
import Types from "components/prop-types";
import action from "actions/magazine/list";

@connect("magazine.list")
export default class extends React.Component {
    static displayName = "MagazineList.Magazine"
    static propTypes = Types.magazine;

    onClick (episode) {
        const {dispatch} = this.props;

        scrollTo(window, 0, this.e.offsetTop);
        dispatch(action.show(episode));
    }

    render () {
        const {title, cover, selectedEpisode, episodes} = this.props;
        const magazine = b.with("magazineLayout");
        const magazineEpisode = b.with("magazineEpisodeLayout");

        return (
            <div
                className={magazine()}
                ref={(e) => {
                    this.e = e;
                }}
            >
                <div className={magazine("title")}>
                    {title}
                </div>
                <div className={magazine("content")}>
                    <Scroll layout={magazineEpisode}>
                        {[
                            <Page
                                key="cover"
                                layout={magazineEpisode("content")}
                                {...cover}
                            />,
                            ...episodes.map((e) =>
                                <Page
                                    focus={e.id === selectedEpisode.id}
                                    key={e.id}
                                    layout={magazineEpisode("content")}
                                    onClick={() => this.onClick(e)}
                                    url={e.url}
                                    {...e.page}
                                />)
                        ]}
                    </Scroll>
                    <Episode
                        ready={includes(episodes, selectedEpisode)}
                        {...selectedEpisode}
                    />
                </div>
            </div>
        );
    }
}
