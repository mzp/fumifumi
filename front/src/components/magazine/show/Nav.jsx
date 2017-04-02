import React from "react";
import {Link} from "react-router";
import cx from "classnames";
import b from "components/lib/b";

export default class extends React.Component {
    static displayName = "Episode.Magazine.Nav"

    static propTypes = {
        "next": React.PropTypes.string,
        "prev": React.PropTypes.string,
        "title": React.PropTypes.string
    }

    static defaultProps = {
        "next": "",
        "prev": "",
        "title": ""
    }

    render () {
        const nav = b.with("magazineNav");
        const layout = b.with("navLayout");
        const {title, prev, next} = this.props;

        return (
            <div className={cx(nav(), layout())}>
                <div className={cx(nav("title"), layout("title"))}>{title}</div>
                <Link
                    // eslint-disable-next-line react/forbid-component-props
                    className={cx(nav("action"), layout("next"))}
                    to={next}
                >
                    {next && "<"}
                </Link>
                <Link
                    // eslint-disable-next-line react/forbid-component-props
                    className={cx(nav("action"), layout("prev"))}
                    to={prev}
                >
                    {prev && ">"}
                </Link>
            </div>
        );
    }
}
