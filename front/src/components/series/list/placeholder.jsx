import React from "react";
import cx from "classnames";
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

export function seriesArea () {
    const series = b.with("seriesThumbnail");

    return (
        <div>
            <div className={series()}>
                <h2 className={series("title")}>
                    <RectShape
                        className="placeholder"
                        color="rgba(0,0,0,0.2)"
                        style={{
                            "height": "1.5rem",
                            "marginBottom": "5px",
                            "marginTop": "20px",
                            "width": "20rem"
                        }}
                    />
                </h2>
            </div>
            <div className={cx(series("magazines"), layout())}>
                {contentArea()}
                {contentArea()}
                {contentArea()}
            </div>
        </div>
    );
}

export default (
    <div>
        {seriesArea()}
        {seriesArea()}
        {seriesArea()}
    </div>
);
