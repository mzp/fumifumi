import React from "react";
import {RectShape} from "react-placeholder/lib/placeholders";
import b from "components/lib/b";

// Because react-placeholder use style props, disable eslist.
/* eslint-disable react/forbid-component-props */

// I want to define placeholder module at one file.
/* eslint-disable react/no-multi-comp */

const layout = b.with("tileLayout");

function contentArea () {
    return (
        <div className={layout("tile")}>
            <RectShape
                className="placeholder"
                color="rgba(0,0,0,0.2)"
                style={{"width": "98%"}}
            />
        </div>
    );
}

export function magazineArea () {
    const info = b.with("info");

    return (
        <div>
            <div className={info()}>
                <h2 className={info("main")}>
                    <RectShape
                        className="placeholder"
                        color="rgba(0,0,0,0.2)"
                        style={{
                            "height": "1rem",
                            "margin": "10px",
                            "width": "20rem"
                        }}
                    />
                </h2>
            </div>
            <div className={layout()}>
                {contentArea()}
                {contentArea()}
                {contentArea()}
                {contentArea()}
                {contentArea()}
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
