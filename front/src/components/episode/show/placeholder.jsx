import React from "react";
import {RectShape} from "react-placeholder/lib/placeholders";
import b from "components/lib/b";

// Because react-placeholder use style props, disable eslist.
/* eslint-disable react/forbid-component-props */

// I want to define placeholder module at one file.
/* eslint-disable react/no-multi-comp */

const layout = b.with("pagesLayout");

function page () {
    return (
        <div className={layout("page")}>
            <RectShape
                className="placeholder"
                color="rgba(0,0,0,0.2)"
                style={{"margin": "1px"}}
            />
        </div>);
}

// eslint-disable-next-line no-extra-parens
export default (
    <div className={layout()}>
        {page()}
    </div>
);
