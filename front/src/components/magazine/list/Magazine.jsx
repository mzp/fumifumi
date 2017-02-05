import React from "react";
import {Link} from "react-router";
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

    suffix () {
        if (this.props.fetching) {
            return "💭";
        }

        return "";

    }

    render () {
        const {title, url, cover, selectedEpisode, episodes} = this.props;
        const magazine = b.with("magazineLayout");
        const panel = b.with("panelLayout");

        return (
            <div
                className={magazine()}
                ref={(e) => {
                    this.e = e;
                }}
            >
                <div className={magazine("title")}>
                    <Link to={url}>{title}</Link> {this.suffix()}
                </div>
                <div className={magazine("content")}>
                    <Scroll layout={panel}>
                        {[
                            <Page
                                key="cover"
                                layout={panel("panel")}
                                {...cover}
                            />,
                            ...episodes.map((e) =>
                                <Page
                                    focus={e.id === selectedEpisode.id}
                                    key={e.id}
                                    layout={panel("panel")}
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
