/* @flow */
import {handleActions} from "redux-actions";
import action from "actions/magazine/import";

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

    [action.error]: (state, {payload}) => {
        const {file, error} = payload;

        return update(state, file, (x) =>
            ({
                ...x,
                error,
                "status": "error"
            }));
    },

    [action.set]: (state, {payload}) =>
        payload.map((file, i) => ({
            file,
            "id": i,
            "name": file.name,
            "status": "prepare"
        })),

    [action.start]: (state, {payload}) =>
        update(state, payload, (file) =>
            ({
                ...file,
                "status": "start"
            })),

    [action.success]: (state, {payload}) =>
        update(state, payload, (file) =>
            ({
                ...file,
                "status": "success"
            }))
}, []);
