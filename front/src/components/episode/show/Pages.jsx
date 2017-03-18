import React from "react";
import cx from "classnames";
import reverse from "lodash.reverse";
import Page from "./Page";
import Types from "components/prop-types";
import b from "components/lib/b";

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
        setTimeout(() => {
            // XXX: Without this delay, element is not scroll at mobile safari
            this.e.scrollLeft = this.e.scrollWidth;
        }, 500);
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
                {reverse(pages.map((page) =>
                    <Page
                        key={page.id}
                        layout={layout("page")}
                        {...page}
                    />))}
            </div>);
    }

}
