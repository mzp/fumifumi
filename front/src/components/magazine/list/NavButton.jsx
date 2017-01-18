import React from "react";
import cx from "classnames";
import b from "components/lib/b";

export default class extends React.PureComponent {
    static displayName = "MagazineList.Magazine";
    static propTypes = {
        "label": React.PropTypes.string,
        "layout": React.PropTypes.string,
        "onNav": React.PropTypes.func
    };
    static defaultProps = {
        "label": "",
        "layout": null
    }

    render () {
        const {layout, label, onNav} = this.props;

        return (
            <div
                className={cx(layout, "navButton")}
                onClick={onNav}
            >
                <div className={b("navButton", "label")}>{label}</div>
            </div>
        );
    }
}
