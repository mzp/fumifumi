import {post} from "axios";
import headers from "api/lib/rails-header";

export default function (file) {
    const
        config = {"headers": headers()},
        data = new FormData();

    data.append("attachment", file);

    return post("/magazines", data, config);
}
