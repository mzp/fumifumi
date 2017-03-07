import React from "react";
import {Link} from "react-router";
import Types from "components/prop-types";
import Image from "components/lib/Image";

export default class extends React.PureComponent {
    static displayName = "Common.EpisodeThumbnail";
    static propTypes = {
        "layout": React.PropTypes.string,
        "url": React.PropTypes.string,
        ...Types.page
    };

    static defaultProps = {
        "layout": "",
        "url": ""
    }

    render () {
        const {"thumbnail_url": imageURL, layout, url} = this.props;

        return (
            <div className={layout}>
                <Link to={url}>
                    <Image src={imageURL} />
                </Link>
            </div>
        );
    }
}
