import React from "react";
import cx from "classnames";
import reverse from "lodash.reverse";
import Page from "./Page";
import Types from "components/prop-types";
import b from "components/lib/b";
import setScroll from "components/lib/set-scroll";

export default class extends React.Component {
    static displayName = "Episode.Show.Pages"
    static propTypes = {
        "info": React.PropTypes.bool,
        "pages": React.PropTypes.arrayOf(React.PropTypes.shape(Types.page))
    }

    static defaultProps = {
        "info": false,
        "pages": []
    }

    componentDidMount () {
        setScroll(this.e, this.e.scrollWidth);
    }

    componentWillUnmount () {
        this.e = null;
    }

    masked () {
        if (this.props.info) {
            return b("masked");
        }

        return "";
    }

    render () {
        const {pages} = this.props;
        const layout = b.with("pagesLayout");

        return (
            <div
                className={cx(layout({"noScroll": this.props.info}), this.masked())}
                ref={(e) => {
                    this.e = e;
                }}
            >
                {reverse(pages.map((page, i) =>
                    <Page
                        key={page.id}
                        layout={layout("page", {
                            "even": i % 2 === 0,
                            "odd": i % 2 === 1
                        })}
                        {...page}
                    />))}
            </div>);
    }
}
