import React from "react";
import b from "components/lib/b";

export default class extends React.Component {
    static displayName = "Header"

    // eslint-disable-next-line class-methods-use-this
    render () {
        const header = b.with("header");

        return (
            <header className={header()}>
                <h1 className={header("title")}>
                    <a href="/">{"fumi*fumi"}</a>
                </h1>
                <div className={header("action")}>
                    <a href="/magazines/dashboard">{"📈"}</a>
                </div>
            </header>);
    }
}
