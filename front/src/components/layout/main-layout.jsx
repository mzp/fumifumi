import React from "react";
import Header from "./Header";
import passThrough from "./pass-through";
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
                    <Component {...passThrough(this.props)} />
                </div>
            </div>
        );
    }
};
