import React from "react";
import PropTypes from "prop-types";
import onClickOutside from "react-onclickoutside";
import Result from "./Result";
import {search, searchclear} from "reducers";
import connect from "components/lib/connect";
import b from "components/lib/b";
import Types from "components/prop-types";

@connect("search") @onClickOutside
export default class extends React.Component {
    static displayName = "Search"

    static propTypes = {
        "dispatch": PropTypes.func,
        "results": PropTypes.arrayOf(PropTypes.shape(Types.episode))
    }

    static defaultProps = {
        "dispatch": null,
        "results": []
    }

    componentWillUnmount () {
        this.props.dispatch(searchclear);
    }

    handleClickOutside () {
        this.props.dispatch(searchclear);
    }

    onSearch (e) {
        this.props.dispatch(search(e.target.value));
    }

    results () {
        return this.props.results || [];
    }

    style () {
        let display = "";

        if (this.results().length === 0) {
            display = "none";
        }

        return {display};
    }

    render () {
        const layout = b.with("searchLayout");

        return (
            <div className={layout()}>
                <input
                    className={layout("query")}
                    onChange={::this.onSearch}
                    type="search"
                />
                <div
                    className={layout("results")}
                    style={this.style()}
                >
                    {this.results().map((result) =>
                        <Result
                            key={result.id}
                            layout={layout("result")}
                            {...result}
                        />)}
                </div>
            </div>
        );
    }
}
