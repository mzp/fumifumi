import React from "react";
import Scroll from "./scroll";
import {mainLayout} from "components/layout";

@mainLayout
export default class extends React.Component {
    static displayName = "MagazineList"
    render () {
        return <Scroll />;
    }
}
