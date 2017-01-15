/* @flow */
import createAction from "actions/lib/create-action";

const action = createAction("magazine.import");

export default {
    "error": action("error",
      (file, error) => ({
          error,
          file
      })),

    "set": action("set"),
    "start": action("start"),
    "success": action("success")
};
