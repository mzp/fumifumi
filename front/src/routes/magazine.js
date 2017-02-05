import Import from "components/magazine/import";
import List from "components/magazine/list";

export default {
    "childRoutes": [
        {
            "component": Import,
            "path": "magazines/new"
        },
        {
            "component": List,
            "path": "magazines"
        }
    ]
};
