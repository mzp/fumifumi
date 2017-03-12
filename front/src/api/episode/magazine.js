import {get} from "axios";

export default function (id) {
    return get(`/api/web/magazines/${id}`);
}
