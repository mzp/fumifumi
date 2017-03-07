import React from "react";
import Page from "./Page";
import Scroll from "./Scroll";
import b from "components/lib/b";
import Types from "components/prop-types";

export default class extends React.Component {
    static displayName = "MagazineList.Episodes"
    static propTypes = Types.magazine

    render () {
        const {cover, selectedEpisode, episodes, onClick} = this.props;
        const panel = b.with("panelLayout");

        return (
            <Scroll layout={panel}>
                {[
                    <Page
                        key="cover"
                        layout={panel("panel")}
                        {...cover}
                    />,
                    ...episodes.map((e) =>
                        <Page
                            focus={e.id === selectedEpisode.id}
                            key={e.id}
                            layout={panel("panel")}
                            onClick={() => onClick(e)}
                            url={e.url}
                            {...e.page}
                        />)
                ]}
            </Scroll>
        );
    }
}
