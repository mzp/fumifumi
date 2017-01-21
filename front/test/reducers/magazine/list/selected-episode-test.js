import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import reducer from "reducers/magazine/list/selected-episode";

test((t) => {
    t.is(
        reducer(true, {
            "payload": "foo",
            "type": "magazine.list.show"
        }),
      "foo");
});
