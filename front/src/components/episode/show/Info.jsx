import React from "react";
import {Link} from "react-router";
import b from "components/lib/b";
import Types from "components/prop-types";

export default class extends React.Component {
    static displayName = "Episode.Info"

    static propTypes = {
        "show": React.PropTypes.bool,
        ...Types.episode
    }

    static defaultProps = {"show": false}

    render () {
        const {author, "author_url": url, "magazine_title": magazineTitle, "magazine_url": magazineUrl, show, title} = this.props;

        if (!show) {
            return null;
        }

        const layout = b.with("overlayLayout");

        return (
            <div className={layout()}>
                <div className={layout("main")}>{title}</div>
                <div className={layout("sub")}>
                    <Link to={url}>{author}</Link>
                </div>
                <div className={layout("sub")}>
                    <Link to={magazineUrl}>{magazineTitle}</Link>
                </div>
            </div>
        );
    }
}
