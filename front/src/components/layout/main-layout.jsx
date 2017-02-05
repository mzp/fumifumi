import React from "react";
import Header from "./Header";
import routerParams from "./router-params";
import b from "components/lib/b";

export default (Component) => class extends React.Component {
    static displayName = "Header"

    render () {
        const layout = b.with("mainLayout");

        return (
            <div className={layout()}>
                <div className={layout("headerArea")}>
                    <Header />
                </div>
                <div className={layout("bodyArea")}>
                    <Component {...routerParams(this.props)} />
                </div>
            </div>
        );
    }
};
