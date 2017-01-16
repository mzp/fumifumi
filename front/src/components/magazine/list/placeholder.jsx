import React from "react";
import {RectShape} from "react-placeholder/lib/placeholders";

// Because react-placeholder use style props, disable eslist.
/* eslint-disable react/forbid-component-props */

// I want to define placeholder module at one file.
/* eslint-disable react/no-multi-comp */

function content (alpha) {
    return (
        <div
            className="magazineEpisodeLayout_content"
            style={{"padding": "1px"}}
        >
            <RectShape
                color={`rgba(0,0,0,${alpha})`}
                style={{"height": "20rem"}}
            />
        </div>
    );
}

function magazine () {
    return (
        <div className="magazineLayout">
            <div className="magazineLayout_title">
                <RectShape
                    color="rgba(0,0,0,0.2)"
                    style={{"width": "20rem"}}
                />
            </div>
            <div className="magazineLayout_content">
                <div className="magazineEpisodeLayout">
                    <div className="magazineEpisodeLayout_contents">
                        {content(0)}
                        {content(0.2)}
                        {content(0.2)}
                        {content(0.2)}
                        {content(0)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default (
    <div>
        {magazine()}
        {magazine()}
        {magazine()}
    </div>
);
