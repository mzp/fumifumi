import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import reducer from "reducers/episode/show/pages";

test((t) => {
    t.deepEqual(
        reducer([], {
            "payload": {
                "pages": ["bar", "baz"],
                "title": "foo"
            },
            "type": "episode.show.fetch"
        }),
      ["bar", "baz"]);
});
