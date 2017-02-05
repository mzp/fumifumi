import React from "react";
import scrollTo from "scroll-to";
import {Link} from "react-router";
import includes from "lodash.includes";
import Episodes from "./Episodes";
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
                    <Episodes
                        cover={cover}
                        episodes={episodes}
                        onClick={::this.onClick}
                        selectedEpisode={selectedEpisode}
                    />
                    <Episode
                        ready={includes(episodes, selectedEpisode)}
                        {...selectedEpisode}
                    />
                </div>
            </div>
        );
    }
}
