/* @flow */
import createAction from "actions/lib/create-action";

const action = createAction("episode.magazine");

export default {
    "fetchEpisodes": action("fetch.episodes"),
    "fetchMagazine": action("fetch.magazine"),
    "start": action("start")
};
