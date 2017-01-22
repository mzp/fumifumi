import React from "react";
import Types from "components/prop-types";

export default class extends React.Component {
    static displayName = "Episode.Page"

    static propTypes = {
        "layout": React.PropTypes.string,
        ...Types.page
    }

    static defaultProps = {"layout": ""}

    render () {
        const {layout, "image_url": url} = this.props;

        return (
            <div className={layout}>
                <img src={url} />
            </div>
        );
    }
}
