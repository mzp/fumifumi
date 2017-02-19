import {get} from "axios";

export default function (page = 1) {
    return get(`/api/web/magazines?page=${page}`);
}
