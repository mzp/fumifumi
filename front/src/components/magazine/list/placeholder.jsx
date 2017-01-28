import React from "react";
import cx from "classnames";
import {RectShape} from "react-placeholder/lib/placeholders";
import b from "components/lib/b";

// Because react-placeholder use style props, disable eslist.
/* eslint-disable react/forbid-component-props */

// I want to define placeholder module at one file.
/* eslint-disable react/no-multi-comp */

const magazine = b.with("magazineLayout");
const scroll = b.with("scrollLayout");
const panel = b.with("panelLayout");

function contentArea (alpha) {
    return (
        <div
            className={panel("panel")}
            style={{"padding": "1px"}}
        >
            <RectShape
                className="placeholder"
                color={`rgba(0,0,0,${alpha})`}
            />
        </div>
    );
}

function magazineArea () {
    return (
        <div className={magazine()}>
            <div className={magazine("title")}>
                <RectShape
                    className="placeholder"
                    color="rgba(0,0,0,0.2)"
                    style={{"width": "20rem"}}
                />
            </div>
            <div className={magazine("content")}>
                <div className={scroll()}>
                    <div className={cx(scroll("contents"), panel())}>
                        {contentArea(0)}
                        {contentArea(0.2)}
                        {contentArea(0.2)}
                        {contentArea(0.2)}
                        {contentArea(0.2)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default (
    <div>
        {magazineArea()}
        {magazineArea()}
        {magazineArea()}
    </div>
);
