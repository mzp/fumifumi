import React from "react";
import b from "components/lib/b";

export default (Component) => class extends React.Component {
    static displayName = "Header"

    // eslint-disable-next-line class-methods-use-this
    render () {
        const layout = b.with("mainLayout");
        const header = b.with("header");

        return (
            <div className={layout()}>
                <div className={layout("headerArea")}>
                    <header className={header()}>
                        <h1 className={header("title")}>
                            <a href="/">{"fumi*fumi"}</a>
                        </h1>
                        <div className={header("action")}>
                            <a href="/magazines/dashboard">{"📈"}</a>
                        </div>
                    </header>
                </div>
                <div className={layout("bodyArea")}>
                    <Component />
                </div>
            </div>
        );
    }
};
