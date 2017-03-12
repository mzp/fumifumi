import {get} from "axios";

export default function () {
    return get("/api/web/series");
}
