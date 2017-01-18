import React from "react";
import scollTo from "scroll-to";
import Page from "./Page";
import Types from "./types";
import NavButton from "./NavButton";
import b from "components/lib/b";

function floor (n, base) {
    return Math.floor(n / base) * base;
}

function ceil (n, base) {
    return Math.ceil(n / base) * base;
}

export default class extends React.PureComponent {
    static displayName = "MagazineList.Magazine"
    static propTypes = Types.magazine;

    onPrev () {
        scollTo(this.contents, floor(this.x + this.unit, this.width()), 0);
    }

    onNext () {
        scollTo(this.contents, ceil(this.x - this.unit, this.width()), 0);
    }

    get x () {
        return this.contents.scrollLeft;
    }

    get unit () {
        return this.width() * 3;
    }

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
                            onNav={::this.onPrev}
                        />
                        <NavButton
                            label=">"
                            layout={magazineEpisode("next")}
                            onNav={::this.onNext}
                        />
                        <div
                            className={magazineEpisode("contents")}
                            ref={(c) => {
                                this.contents = c;
                            }}
                        >
                            <div
                                className={magazineEpisode("content")}
                                ref={(c) => {
                                    this.width = () => c.offsetWidth;
                                }}
                            />
                            <Page {...cover} />
                            {episodes.map((e) =>
                                <Page
                                    key={e.id}
                                    url={e.url}
                                    {...e.page}
                                />)}
                            <div className={magazineEpisode("content")} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
