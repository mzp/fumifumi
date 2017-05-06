import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import b from "components/lib/b";
import EpisodeThumbnail from "components/common/EpisodeThumbnail";
import Types from "components/prop-types";

export default class extends React.Component {
    static displayName = "Series.List.Series"
    static propTypes = {
        "hasMore": PropTypes.bool,
        "magazines":
          PropTypes.arrayOf(
              PropTypes.shape(
                Types.magazine)),
        "onLoad": PropTypes.func,
        "title": PropTypes.string
    }
    static defaultProps = {
        "hasMore": false,
        "magazines": [],
        "onLoad": null,
        "title": ""
    }

    handleScroll (e) {
        if (!this.props.hasMore) {
            return;
        }

        const {scrollLeft, scrollWidth, offsetWidth} = e.target;
        const diff = scrollWidth - (scrollLeft + offsetWidth);

        if (diff < 100) {
            this.props.onLoad();
        }
    }

    render () {
        const {title, magazines} = this.props;
        const series = b.with("seriesThumbnail");
        const layout = b.with("rowLayout");

        return (
            <div className={series()}>
                <h2 className={series("title")}>{title}</h2>
                <div
                    className={cx(series("magazines"), layout())}
                    onScroll={::this.handleScroll}
                >
                    {magazines.map((m) =>
                        <EpisodeThumbnail
                            key={m.id}
                            layout={layout("item")}
                            url={m.url}
                            {...m.cover}
                        />)
                  }
                </div>
            </div>
        );
    }
}
