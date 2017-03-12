import React from "react";
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

export default (
    <div className={layout()}>
        {page()}
        {page()}
        {page()}
        {page()}
        {page()}
    </div>
);
