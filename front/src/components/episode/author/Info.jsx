import React from "react";
import b from "components/lib/b";

export default class extends React.Component {
    static displayName = "Episode.Author.Info"

    static propTypes = {"name": React.PropTypes.string.isRequired}

    render () {
        const info = b.with("info");

        return (
            <div className={info()}>
                <div className={info("main")}>
                    {this.props.name}
                </div>
            </div>
        );
    }
}
