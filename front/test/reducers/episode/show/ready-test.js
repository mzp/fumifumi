import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import reducer from "reducers/episode/show/ready";

test((t) => {
    t.is(
        reducer(true, {"type": "episode.show.start"}),
      false);
});

test((t) => {
    t.is(
        reducer(false, {"type": "episode.show.fetch"}),
      true);
});
