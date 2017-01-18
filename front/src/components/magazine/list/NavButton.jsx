import React from "react";
import cx from "classnames";
import b from "components/lib/b";

export default class extends React.PureComponent {
    static displayName = "MagazineList.Magazine";
    static propTypes = {
        "enable": React.PropTypes.bool,
        "label": React.PropTypes.string,
        "layout": React.PropTypes.string,
        "onNav": React.PropTypes.func
    };
    static defaultProps = {
        "enable": true,
        "label": "",
        "layout": null
    }

    render () {
        const {enable, layout, label, onNav} = this.props;
        const navButton = b.with("navButton");

        return (
            <div
                className={cx(layout, navButton({"hidden": !enable}))}
                onClick={onNav}
            >
                <div className={navButton("label")}>{label}</div>
            </div>
        );
    }
}
