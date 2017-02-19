import {get} from "axios";

export default function (name) {
    return get(`/api/web/episodes/author?name=${name}`);
}
