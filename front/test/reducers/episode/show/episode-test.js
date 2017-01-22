import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import reducer from "reducers/episode/show/episode";

test((t) => {
    t.deepEqual(
        reducer({}, {
            "payload": {"title": "foo"},
            "type": "episode.show.fetch"
        }),
      {"title": "foo"});
});
