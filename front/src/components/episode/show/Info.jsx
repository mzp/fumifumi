import React from "react";
import b from "components/lib/b";

export default class extends React.Component {
    static displayName = "Episode.Info"

    static propTypes = {
        "author": React.PropTypes.string,
        "author_url": React.PropTypes.string,
        "title": React.PropTypes.string
    }

    static defaultProps = {
        "author": "",
        "author_url": "",
        "title": ""
    }

    render () {
        const {title, author, "author_url": url} = this.props;
        const layout = b.with("info");

        return (
            <div className={layout()}>
                <h1 className={layout("main")}>{title}</h1>
                <h2 className={layout("sub")}>
                    <a href={url}>{author}</a>
                </h2>
            </div>
        );
    }
}
