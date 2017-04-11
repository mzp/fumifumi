import React from "react";
import ReactPlaceholder from "react-placeholder";
import cx from "classnames";
import {RectShape} from "react-placeholder/lib/placeholders";
import b from "components/lib/b";

// Because react-placeholder use style props, disable eslist.
/* eslint-disable react/forbid-component-props */

// I want to define placeholder module at one file.
/* eslint-disable react/no-multi-comp */

const layout = b.with("tileLayout");

function page () {
    return (
        <div className={layout("tile")}>
            <RectShape
                className="placeholder"
                color="rgba(0,0,0,0.2)"
                style={{"width": "99%"}}
            />
        </div>);
}

function placeholder () {
    return (
        <div className={cx(b("magazineEpisodes"), layout())}>
            {page()}
            {page()}
            {page()}
            {page()}
            {page()}
        </div>);
}

export default class extends React.Component {
    static displayName = "Magazine.Show.Placehodler"

    static propTypes = {
        "children": React.PropTypes.element.isRequired,
        "ready": React.PropTypes.bool
    }

    static defaultProps = {"ready": false}

    render () {
        const {ready, children} = this.props;

        return (
            <ReactPlaceholder
                customPlaceholder={placeholder()}
                ready={ready}
            >
                {children}
            </ReactPlaceholder>
        );
    }
}
