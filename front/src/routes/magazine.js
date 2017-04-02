import Import from "components/magazine/import";
import Magazine from "components/magazine/show";

export default {
    "childRoutes": [
        {
            "component": Import,
            "path": "magazines/new"
        },
        {
            "component": Magazine,
            "path": "magazines/:id"
        }
    ]
};
