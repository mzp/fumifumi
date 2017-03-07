import React from "react";
import Scroll from "./scroll";
import Tile from "./tile";
import {mainLayout} from "components/layout";

@mainLayout
export default class extends React.Component {
    static displayName = "MagazineList"
    static propTypes = {"params": React.PropTypes.shape({"type": React.PropTypes.string})};
    static defaultProps = {"params": {"type": "scroll"}};

    render () {
        const {type} = this.props.params;

        if (type === "tile") {
            return <Tile />;
        }

        return <Scroll />;

    }
}
