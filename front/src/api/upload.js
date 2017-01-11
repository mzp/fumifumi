import {post} from "axios";
import headers from "./lib/rails-header";

export default function (file, onProgress) {
    const
        config = {
            "headers": headers(),
            "onUploadProgress": (e) => {
                const progress = Math.round(e.loaded * 100 / e.total);

                if (onProgress) {
                    onProgress(progress);
                }
            }
        },
        data = new FormData();

    data.append("attachment", file);

    return post("/magazines", data, config);
}
