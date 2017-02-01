import React from "react";
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
        const {author, "author_url": url, "magazine_title": magazineTitle, show, title} = this.props;

        if (!show) {
            return null;
        }

        const layout = b.with("overlayLayout");

        return (
            <div className={layout()}>
                <div className={layout("main")}>{title}</div>
                <div className={layout("sub")}>
                    <a href={url}>{author}</a>
                </div>
                <div className={layout("sub")}>{magazineTitle}</div>
            </div>
        );
    }
}
