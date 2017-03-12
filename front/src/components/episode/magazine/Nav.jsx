import React from "react";
import cx from "classnames";
import b from "components/lib/b";

export default class extends React.Component {
    static displayName = "Episode.Magazine.Nav"

    static propTypes = {"title": React.PropTypes.string}

    static defaultProps = {"title": ""}

    render () {
        const nav = b.with("magazineNav");
        const layout = b.with("navLayout");
        const {title} = this.props;

        return (
            <div className={cx(nav(), layout())}>
                <div className={cx(nav("action"), layout("prev"))}>{"<"}</div>
                <div className={cx(nav("title"), layout("title"))}>{title}</div>
                <div className={cx(nav("action"), layout("next"))}>{">"}</div>
            </div>
        );
    }
}
