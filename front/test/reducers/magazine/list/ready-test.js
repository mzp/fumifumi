import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import reducer from "reducers/magazine/list/ready";

test((t) => {
    t.is(
        reducer(true, {"type": "magazine.list.start"}),
      false);
});

test((t) => {
    t.is(
        reducer(false, {"type": "magazine.list.fetch"}),
      true);
});
