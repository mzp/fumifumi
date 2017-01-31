import test from "ava";

// eslint-disable-next-line import/no-internal-modules
import reducer from "reducers/episode/show/info";

test((t) => {
    t.is(
        reducer(true, {"type": "layout.float.toggle"}),
      false);
});

test((t) => {
    t.is(
        reducer(false, {"type": "layout.float.toggle"}),
      true);
});

test((t) => {
    t.is(
        reducer(true, {"type": "layout.float.hide"}),
      false);
});

test((t) => {
    t.is(
        reducer(false, {"type": "layout.float.hide"}),
      false);
});
