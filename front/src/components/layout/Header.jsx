import React from "react";
import {Link} from "react-router";
import b from "components/lib/b";
import Search from "components/lib/search";

export default class extends React.Component {
    static displayName = "Header"

    // eslint-disable-next-line class-methods-use-this
    render () {
        const header = b.with("header");

        return (
            <header className={header()}>
                <h1 className={header("title")}>
                    <Link to="/series">{"fumi*fumi"}</Link>
                </h1>
                <div className={header("action")}>
                    <Search />
                    <a href="/magazines/dashboard">{"📈"}</a>
                </div>
            </header>);
    }
}
