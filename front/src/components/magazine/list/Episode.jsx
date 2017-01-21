import React from "react";
import cx from "classnames";
import take from "lodash.take";
import Page from "./Page";
import Types from "./types";
import b from "components/lib/b";

export default class extends React.Component {
    static displayName = "MagazineList.Episode"
    static propTypes = {
        "ready": React.PropTypes.bool,
        ...Types.episode
    }

    static defaultProps = {"ready": false}

    onClick () {
        location.href = this.props.url;
    }

    render () {
        if (!this.props.ready) {
            return null;
        }

        const {author, title, pages} = this.props;

        const layout = b.with("episodeLayout");
        const thumbnail = b.with("episodeThumbnail");
        const button = b.with("button");

        return (
            <div className={cx(layout(), "episodeInfo")}>
                <div className={layout("title")}>{title}</div>
                <div className={layout("author")}>{author}</div>
                <div className={cx(layout("pages"), thumbnail())}>
                    {take(pages, 3).map((p) =>
                        <Page
                            key={p.id}
                            {...p}
                        />)}
                </div>
                <div
                    className={cx(layout("action"), button())}
                    onClick={::this.onClick}
                >
                    {"Read"}
                </div>
            </div>
        );
    }
}
