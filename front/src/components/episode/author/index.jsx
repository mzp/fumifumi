import React from "react";
import Info from "./Info";
import Page from "./Page";
import b from "components/lib/b";
import connect from "components/lib/connect";
import Types from "components/prop-types";
import {mainLayout} from "components/layout";

@mainLayout @connect("episode.author")
export default class extends React.Component {
    static displayName = "Episode.Author"

    static propTypes = {
        "dispatch": React.PropTypes.func,
        "episodes": React.PropTypes.arrayOf(React.PropTypes.shape(Types.episode)),
        "params": React.PropTypes.shape({"name": React.PropTypes.string}).isRequired
    }

    static defaultProps = {
        "episodes": [],
        "params": {}
    }

    componentDidMount () {
        this.props.dispatch({
            "payload": this.props.params,
            "type": "saga.episode.author"
        });
    }

    render () {
        const {episodes, "params": {name}} = this.props;
        const layout = b.with("tileLayout");

        return (
            <div>
                <Info name={name} />
                <div className={layout()}>
                    {episodes.map((e) =>
                        <Page
                            key={e.id}
                            layout={layout("tile")}
                            url={e.url}
                            {...e.page}
                        />)
                    }
                </div>
            </div>
        );
    }
}
