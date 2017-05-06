import React from "react";
import PropTypes from "prop-types";
import Types from "components/prop-types";
import Image from "components/lib/Image";

export default class extends React.Component {
    static displayName = "Episode.Page"

    static propTypes = {
        "layout": PropTypes.string,
        ...Types.page
    }

    static defaultProps = {"layout": ""}

    render () {
        const {layout, "image_url": url} = this.props;

        return (
            <div className={layout}>
                <Image src={url} />
            </div>
        );
    }
}
