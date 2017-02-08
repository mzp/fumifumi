import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import reducer from "reducers/magazine/list/magazines";

test((t) => {
    t.deepEqual(
        reducer([], {
            "payload": ["foo", "bar"],
            "type": "magazine.list.fetch"
        }),
      ["foo", "bar"]);
});

test((t) => {
    t.deepEqual(
        reducer(["foo", "bar"], {
            "payload": ["baz", "xyzzy"],
            "type": "magazine.list.fetch-next"
        }),
      ["foo", "bar", "baz", "xyzzy"]);
});
