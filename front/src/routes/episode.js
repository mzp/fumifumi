import Author from "components/episode/author";
import Magazine from "components/episode/magazine";
import Episode from "components/episode/show";

export default {
    "childRoutes": [
        {
            "component": Author,
            "path": "author"
        },
        {
            "component": Magazine,
            "path": "magazine/:id"
        },
        {
            "component": Episode,
            "path": ":id"
        }
    ],
    "path": "episodes"
};
