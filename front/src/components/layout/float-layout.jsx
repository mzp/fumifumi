import React from "react";
import PropTypes from "prop-types";
import DocumentTitle from "react-document-title";
import Header from "./Header";
import routerParams from "./router-params";
import {hideheader, toggleheader} from "reducers";
import b from "components/lib/b";
import connect from "components/lib/connect";

export default (Component) => @connect("layout") class extends React.Component {
    static displayName = "Header"

    static propTypes = {
        "dispatch": PropTypes.func,
        "header": PropTypes.bool
    }

    static defaultProps = {"header": false}

    onClick () {
        this.props.dispatch(toggleheader);
    }

    componentWillMount () {
        this.props.dispatch(hideheader);
    }

    render () {
        const {header} = this.props;
        const layout = b.with("floatLayout");

        return (
            <DocumentTitle title={"fumi*fumi"}>
                <div className={layout()}>
                    <div className={layout("headerArea", {
                        "hide": !header,
                        "show": header
                    })}
                    >
                        <Header />
                    </div>
                    <div
                        className={layout("bodyArea")}
                        onClick={::this.onClick}
                    >
                        <Component {...routerParams(this.props)} />
                    </div>
                </div>
            </DocumentTitle>
        );
    }
};
