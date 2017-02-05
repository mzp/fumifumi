import {get} from "axios";

export default function (name) {
    return get(`/api/episodes/author?name=${name}`);
}
