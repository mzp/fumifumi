import {connect} from "react-redux";
import get from "lodash.get";

export default function (path) {
    return connect((state) => get(state, path));
}
