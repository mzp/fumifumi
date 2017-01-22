import React from "react";
import b from "components/lib/b";

export default (Component) => class extends React.Component {
    static displayName = "Header"

    // eslint-disable-next-line react/forbid-prop-types
    static propTypes = {"params": React.PropTypes.object}
    static defaultProps = {"params": {}}

    render () {
        const {params} = this.props;
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
                    <Component params={params} />
                </div>
            </div>
        );
    }
};
