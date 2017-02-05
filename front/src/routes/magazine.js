import Import from "components/magazine/import";
import List from "components/magazine/list";

export default {
    "childRoutes": [
        {
            "component": Import,
            "path": "new"
        }
    ],
    "component": List,
    "path": "magazines"
};
