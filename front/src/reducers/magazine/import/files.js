/* @flow */
import {handleActions} from "redux-actions";

function update (files, target, f) {
    return files.map((file) => {
        if (file.file === target) {
            return f(file);
        }

        return file;
    });
}

export default handleActions({
    "@@INIT": (state) => state,

    "magazine.import.error": (state, action) => {
        const {file, error} = action.payload;

        return update(state, file, (x) =>
            ({
                ...x,
                error,
                "status": "error"
            }));
    },

    "magazine.import.set": (state, action) =>
        action.payload.map((file, i) => ({
            file,
            "id": i,
            "name": file.name,
            "status": "prepare"
        })),

    "magazine.import.start": (state, action) =>
        update(state, action.payload, (file) =>
            ({
                ...file,
                "status": "start"
            })),

    "magazine.import.success": (state, action) =>
        update(state, action.payload, (file) =>
            ({
                ...file,
                "status": "success"
            }))
}, []);
