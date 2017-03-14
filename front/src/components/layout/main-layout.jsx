import React from "react";
import DocumentTitle from "react-document-title";
import Header from "./Header";
import routerParams from "./router-params";
import b from "components/lib/b";

export default (Component) => class extends React.Component {
    static displayName = "Header"

    render () {
        const layout = b.with("mainLayout");
        const main = <Component {...routerParams(this.props)} />;

        return (
            <DocumentTitle title={"fumi*fumi"}>
                <div className={layout()}>
                    <div className={layout("headerArea")}>
                        <Header />
                    </div>
                    <div className={layout("bodyArea")}>
                        {main}
                    </div>
                </div>
            </DocumentTitle>
        );
    }
};
