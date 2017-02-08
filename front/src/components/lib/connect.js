import {connect} from "react-redux";
import get from "lodash.get";

export default function (path = null) {
    if (path === null) {
        return connect(() => ({}));
    }

    return connect((state) => get(state, path));
}
