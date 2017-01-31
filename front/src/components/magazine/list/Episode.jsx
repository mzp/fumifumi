import React from "react";
import cx from "classnames";
import take from "lodash.take";
import {Link} from "react-router";
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

    render () {
        if (!this.props.ready) {
            return null;
        }

        const {author, "author_url": authorUrl, url, title, pages} = this.props;

        const layout = b.with("episodeLayout");
        const masked = b.with("masked");
        const panel = b.with("panelLayout");
        const button = b.with("button");

        return (
            <div className={cx(layout(), "episodeInfo")}>
                <div className={layout("title")}>{title}</div>
                <div className={layout("author")}><a href={authorUrl}>{author}</a></div>
                <div className={cx(layout("pages"), masked(), panel())}>
                    {take(pages, 3).map((p) =>
                        <Page
                            key={p.id}
                            layout={panel("panel")}
                            {...p}
                        />)}
                </div>
                <Link
                    // eslint-disable-next-line react/forbid-component-props
                    className={cx(layout("action"), button())}
                    to={url}
                >
                    {"Read"}
                </Link>
            </div>
        );
    }
}
