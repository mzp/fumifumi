import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import reducer from "reducers/magazine/list/fetching";

test((t) => {
    t.is(
        reducer(false, {"type": "magazine.list.start"}),
      true);
    t.is(
        reducer(true, {"type": "magazine.list.start"}),
      true);
});

test((t) => {
    t.is(
        reducer(true, {"type": "magazine.list.fetch"}),
      false);
    t.is(
        reducer(false, {"type": "magazine.list.fetch"}),
      false);
});
