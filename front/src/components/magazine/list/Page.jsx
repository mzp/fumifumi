import React from "react";
import cx from "classnames";
import Types from "components/prop-types";
import b from "components/lib/b";

export default class extends React.PureComponent {
    static displayName = "MagazineList.Page";
    static propTypes = {
        "focus": React.PropTypes.bool,
        "layout": React.PropTypes.string,
        "onClick": React.PropTypes.func,
        ...Types.page
    };

    static defaultProps = {
        "focus": false,
        "layout": "",
        "onClick": null
    }

    render () {
        const {"thumbnail_url": imageURL, layout, onClick, focus} = this.props;

        return (
            <div
                className={cx(layout, b("pageThumbnail", {
                    "clickable": Boolean(onClick),
                    focus
                }))}
                onClick={onClick}
            >
                <img src={imageURL} />
            </div>
        );
    }
}
