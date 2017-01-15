/* @flow */
import {createAction} from "redux-actions";

export default {
    "error": createAction("magazine.import.error",
      (file, error) => ({
          error,
          file
      })),

    "set": createAction("magazine.import.set"),
    "start": createAction("magazine.import.start"),
    "success": createAction("magazine.import.success")
};
