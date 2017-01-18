import React from "react";
import Types from "./types";
import b from "components/lib/b";

export default class extends React.PureComponent {
    static displayName = "MagazineList.Page";
    static propTypes = Types.page;

    render () {
        const {"image_url": imageURL, url} = this.props;

        return (
            <div className={b("magazineEpisodeLayout", "content")} >
                <a href={url}><img src={imageURL} /></a>
            </div>
        );
    }
}
