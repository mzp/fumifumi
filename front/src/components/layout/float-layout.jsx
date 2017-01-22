import React from "react";
import Header from "./Header";
import passThrough from "./pass-through";
import b from "components/lib/b";
import connect from "components/lib/connect";

export default (Component) => @connect("layout") class extends React.Component {
    static displayName = "Header"

    static propTypes = {
        "dispatch": React.PropTypes.func,
        "header": React.PropTypes.bool
    }

    static defaultProps = {"header": false}

    onClick () {
        this.props.dispatch({"type": "layout.header.toggle"});
    }

    componentWillMount () {
        this.props.dispatch({"type": "layout.header.hide"});
    }

    render () {
        const {header} = this.props;
        const layout = b.with("floatLayout");

        return (
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
                    <Component {...passThrough(this.props)} />
                </div>
            </div>
        );
    }
};
