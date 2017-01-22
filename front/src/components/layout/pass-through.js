import pick from "lodash.pick";

export default function (props) {
    return pick(props, ["params"]);
}
