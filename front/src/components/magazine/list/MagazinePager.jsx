import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import connect from "components/lib/connect";

@connect("magazine.list")
export default class extends React.Component {
    static displayName = "MagazineLint.MagazinePager"

    static propTypes = {
        "children": React.PropTypes.arrayOf(Object),
        "dispatch": React.PropTypes.func,
        "hasMore": React.PropTypes.bool
    };
    static defaultProps = {
        "children": [],
        "dispatch": null,
        "hasMore": false
    };

    loadMore (page) {
        this.props.dispatch({
            "payload": {page},
            "type": "saga.magazine.list.fetch-next"
        });
    }

    render () {
        const {children, hasMore} = this.props;


        return (
            <InfiniteScroll
                hasMore={hasMore}
                loadMore={::this.loadMore}
                loader={<div className="loader">{"Loading ..."}</div>}
                pageStart={1}
            >
                {children}
            </InfiniteScroll>
        );
    }
}
