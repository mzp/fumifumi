import Author from "components/episode/author";
import Episode from "components/episode/show";

export default {
    "childRoutes": [
        {
            "component": Author,
            "path": "author"
        },
        {
            "component": Episode,
            "path": ":id"
        }
    ],
    "path": "episodes"
};
