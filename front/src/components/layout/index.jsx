import React from "react";
import Header from "./Header";
import b from "components/lib/b";

export default (Component) => class extends React.Component {
    static displayName = "Header"

    // eslint-disable-next-line react/forbid-prop-types
    static propTypes = {"params": React.PropTypes.object}
    static defaultProps = {"params": {}}

    render () {
        const {params} = this.props;
        const layout = b.with("mainLayout");

        return (
            <div className={layout()}>
                <div className={layout("headerArea")}>
                    <Header />
                </div>
                <div className={layout("bodyArea")}>
                    <Component params={params} />
                </div>
            </div>
        );
    }
};
