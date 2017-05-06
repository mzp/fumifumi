import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import {Link} from "react-router";
import b from "components/lib/b";

export default class extends React.Component {
    static displayName = "Result"

    static propTypes = {
        "layout": PropTypes.string,
        "page": PropTypes.shape({"thumbnail_url": PropTypes.string}),
        "title": PropTypes.string,
        "url": PropTypes.string
    }

    static defaultProps = {
        "layout": "",
        "page": {"thumbnail_url": ""},
        "title": "",
        "url": ""
    }

    render () {
        const {layout, title, url, "page": {"thumbnail_url": thumbnailUrl}} = this.props;
        const result = b.with("searchResult");

        return (
            <div className={cx(layout, result())}>
                <Link to={url}>
                    <img
                        className={result("thumbnail")}
                        src={thumbnailUrl}
                    />
                    <span className={result("title")}>{title}</span>
                </Link>
            </div>
        );
    }
}
