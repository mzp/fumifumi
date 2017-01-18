import React from "react";
import {RectShape} from "react-placeholder/lib/placeholders";
import b from "components/lib/b";

// Because react-placeholder use style props, disable eslist.
/* eslint-disable react/forbid-component-props */

// I want to define placeholder module at one file.
/* eslint-disable react/no-multi-comp */

const magazine = b.with("magazineLayout");
const magazineEpisode = b.with("magazineEpisodeLayout");

function contentArea (alpha) {
    return (
        <div
            className={magazineEpisode("content")}
            style={{"padding": "1px"}}
        >
            <RectShape
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
                    color="rgba(0,0,0,0.2)"
                    style={{"width": "20rem"}}
                />
            </div>
            <div className={magazine("content")}>
                <div className={magazineEpisode()}>
                    <div className={magazineEpisode("contents")}>
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
