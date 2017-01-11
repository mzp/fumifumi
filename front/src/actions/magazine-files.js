/* @flow */
import {createAction} from "redux-actions";

export default {
    "error": createAction("magazine-files.error",
      (file, error) => ({
          error,
          file
      })),

    "set": createAction("magazine-files.set"),
    "start": createAction("magazine-files.start"),
    "success": createAction("magazine-files.success")
};
