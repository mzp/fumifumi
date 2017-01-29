import React from "react";
import {browserHistory} from "react-router";
import cx from "classnames";
import take from "lodash.take";
import Page from "./Page";
import Types from "components/prop-types";
import b from "components/lib/b";

export default class extends React.Component {
    static displayName = "MagazineList.Episode"
    static propTypes = {
        "ready": React.PropTypes.bool,
        ...Types.episode
    }

    static defaultProps = {"ready": false}

    onClick () {
        browserHistory.push(this.props.url);
    }

    render () {
        if (!this.props.ready) {
            return null;
        }

        const {author, "author_url": url, title, pages} = this.props;

        const layout = b.with("episodeLayout");
        const thumbnail = b.with("episodeThumbnail");
        const panel = b.with("panelLayout");
        const button = b.with("button");

        return (
            <div className={cx(layout(), "episodeInfo")}>
                <div className={layout("title")}>{title}</div>
                <div className={layout("author")}><a href={url}>{author}</a></div>
                <div className={cx(layout("pages"), thumbnail(), panel())}>
                    {take(pages, 3).map((p) =>
                        <Page
                            key={p.id}
                            layout={panel("panel")}
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
