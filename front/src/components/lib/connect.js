import {connect} from "react-redux";
import get from "lodash.get";
import {jsonify, bindAction} from "reducers";

export default function (path = null) {
    if (path === null) {
        return connect(() => ({}), bindAction);
    }

    return connect((state) => get(jsonify(state), path), bindAction);
}
